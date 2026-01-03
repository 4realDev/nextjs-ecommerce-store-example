"use client";

import Link from "next/link";
import React from "react";
import classes from "./Header.module.css";
import { NavigationRoutes } from "@/constants/routes";
import { CartButton } from "../CartButton/CartButton";

export const Header = () => {
  return (
    <nav className={classes.navbar}>
      <Link
        href="/"
        className={classes.logo}>
        E-Commerce Shop
      </Link>
      <ul className={classes.navLinks}>
        <li>
          <Link
            href={NavigationRoutes.HOME}
            className={classes.navItem}>
            Home
          </Link>
        </li>
        <li className={classes.navItem}>
          <Link href={NavigationRoutes.PRODUCTS}>Products</Link>
        </li>
      </ul>
      <CartButton />
    </nav>
  );
};
