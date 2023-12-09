"use client";
import React from "react";
import { brnads, categories, products } from "../app/data";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import BlurOnIcon from '@mui/icons-material/BlurOn';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {Rating, Button} from '@mui/material';

export default function SidebarFilter() {
    const colorsFilter = products[0].variant.color
  return (
    <div className="col-span-3">
      <div className="sidebar-filter">
        <div className="side-filter-categories pb-2">
          <h5>Categories</h5>
          <ul className="">
            {categories.map((category, index) => (
              <li key={index}>
                <Link href={"/category/" + category.name}>
                  <span className="font-semibold">{category.name}</span>
                </Link>
                {category.children.length ? (
                  <ul className="">
                    {category.children.map((child, index) => (
                      <li key={index}>
                        <Link href={"/category/" + category.name}>
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* price filter */}
        <div className="side-filter-price pb-4 pt-3">
          <h5>Price Range</h5>
          <div className="flex items-center justify-between ">
            <TextField id="outlined-basic" label="From" variant="outlined" />
            <span className="mx-2">-</span>
            <TextField id="outlined-basic" label="To" variant="outlined" />
          </div>
        </div>
        {/* Brands Filter */}
        <div className="side-filter-brands py-3">
            <h5>Brands</h5>
            <ul className="p-0">
                {brnads.map((item, index)=>(
                    <li key={index}>
                        <Link href=""><BlurOnIcon /> {item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
        {/* Rating Filter */}
        <div className="side-filter-rating py-3">
            <h5>Rating</h5>
            {[5,4,3,2,1].map(item=>(
                <Rating
                key={item}
                name="half-rating-read"
                value={item}
                readOnly
                size="small"
                />
            ))}
        </div>
        {/* Color Filter */}
        <div className="side-filter-color py-3">
            <h5>Color</h5>
            <ul className="flex gap-3 p-0">
                {colorsFilter.map(item=>(
                    <li><FiberManualRecordIcon sx={{ color: item, fontSize: "38px", borderWidth: "1px", borderRadius: "50px"}}/></li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
}
