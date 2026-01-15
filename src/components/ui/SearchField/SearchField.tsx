"use client";

import React, { useContext } from "react";
import classes from "./SearchField.module.css";
import { ProductsContext } from "@/store/product-context-provider";

export const SearchField = () => {
  const { searchTerm, setSearchTerm } = useContext(ProductsContext);
  return (
    <input
      type="text"
      placeholder="Search products..."
      className={classes.searchInput}
      value={searchTerm}
      onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
    />
  );
};
