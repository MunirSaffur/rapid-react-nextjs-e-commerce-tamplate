import React from "react";
import ProductCard from "@/components/ProductCard";
import SidebarFilter from "@/components/SidebarFilter";
import { categories, products } from "../../data";
import Pagination from "@mui/material/Pagination";
import MobileFilters from "@/components/MobileFilter";

export default function page({ params }) {
  return (
    <div className="container">
      <div className="my-4 flex items-center justify-between">
        <p className="mb-0">cetegory - {params.category}</p>
        <div className='block sm:hidden'>
        <MobileFilters props={params}/>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 mb-5">
        {/* filters side */}
        <div className="col-span-3 hidden sm:block">
          <SidebarFilter/>
        </div>
        {/* prodcuts side */}
        <div className="col-span-12 sm:col-span-9">
          <div className="grid grid-cols-6 sm:grid-cols-12 gap-3">
            {products.map((item, index) => (
             <div className="col-span-3" key={index}>
               <ProductCard data={item} />
             </div>
            ))}
          </div>
          <div className="category-pagination">
            <Pagination count={10} variant="outlined" />
          </div>
        </div>
      </div>
    </div>
  );
}
