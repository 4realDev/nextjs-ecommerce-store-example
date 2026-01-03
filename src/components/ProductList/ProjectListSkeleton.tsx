import React from "react";
import { ProductItemSkeleton } from "../ProductItem/ProductItemSkeleton";
import classes from "./ProductList.module.css";

export const ProjectListSkeleton = () => {
  return (
    <ul className={classes.productsGrid}>
      {Array.from({ length: 8 }).map((_, index) => (
        <ProductItemSkeleton key={index} />
      ))}
    </ul>
  );
};
