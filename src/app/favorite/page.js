"use client";
import React from "react";
import { products } from "../data";
import ProductCard from "@/components/ProductCard";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
export default function page() {
    const [sort, setSort] = React.useState(0);
  return (
    <div>
      <div className="page-sort my-3 flex justify-end">
        <FormControl>
        <InputLabel>Sort</InputLabel>
            <Select
            style={{width : "180px", border: "none"}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sort}
            label="Age"
            size="small"
            onChange={(event)=>{setSort(event.target.value)}}
            >
            <MenuItem value={0}>Relevance</MenuItem>    
            <MenuItem value={10}>Date</MenuItem>
            <MenuItem value={20}>Price (low to high)</MenuItem>
            <MenuItem value={30}>Price (high to low)</MenuItem>
            </Select>
        </FormControl>
      </div>
      <div className="grid grid-rows-2 grid-flow-col gap-3">
        {products.map((item, index) => (
          <ProductCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
