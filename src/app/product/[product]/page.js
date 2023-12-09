import ProductImageGallary from "@/components/ProductComponents/ProductImageGallary";
import React from "react";
import { products } from "@/app/data";
import {Rating} from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ProductActions from "@/components/ProductComponents/ProductActions";
import Avatar from '@mui/material/Avatar';
import ProductSlider from "@/components/ProductSlider";

export default function ProductDetails({params}) {
    const productData = products.find(item => item.id === Number(params.product));

  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-3 mb-5 mt-3 sm:mt-5">
        <div className="col-span-12 sm:col-span-6">
        <ProductImageGallary />
        </div>
        <div className="col-span-12 sm:col-span-6">
            <div className="product-details">
                <h1 className="mb-1">{productData.title}</h1>
                <p className="mb-1 font-light">{productData.description.substring(0,60)}...</p>
                <div className="product-page-rating">
                    <Rating
                    name="half-rating-read"
                    value={productData.rating}
                    readOnly
                    size="small"
                    /> 
                    <span className="rate-count">({productData.rating})</span>
                </div>
                <ul className="p-0">
                    <li><strong>SKU: </strong>143ARC</li>
                    <li><strong>Brand: </strong>{productData.brand}</li>
                    <li><strong>Availability: </strong>{productData.stock > 1 ? 'in stock' : 'sold'}</li>
                    <li className="sale">4 item in stock! <LocalFireDepartmentIcon/></li>
                </ul>
                <ProductActions data={productData}/>
            </div>
        </div>
      </div>
      <div className="product-disc mt-4 mb-10">
        <h5>Description</h5>
        <p>{productData.description}</p>
      </div>
      <div className="product-reviews mt-4 mb-10">
        <h5>Reviews</h5>
        {
            productData.reviews.map((item, index)=>(
                <div className="product-reviews mb-3" key={index}>
                    <div className="flex items-center mb-2">
                        <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" />
                        <div className="ml-3">
                            <p className="mb-1 pl-1 font-medium">{item.name}</p>
                            <div className="flex items-center">
                                <Rating name="read-only" value={item.rating} readOnly />
                                <span className="font-light text-sm">({item.rating})</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-base font-light">{item.body}</p>
                </div>
            ))
        }
      </div>

      <ProductSlider slidesPerView={5} spaceBetween={20} data={products} loop={true} title="Suggested for you" seeAll={false}/>
    </div>
  );
}
