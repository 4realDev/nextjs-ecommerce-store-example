"use client";

import { NavigationRoutes } from "@/constants/routes";
import { CartContext } from "@/store/cart-context-provider";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Link from "next/link";
import React, { useContext } from "react";
import classes from "./CartButton.module.css";
import Button from "../ui/Button/Button";

export const CartButton = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <Link href={NavigationRoutes.CART}>
      <Button
        variant="light"
        icon={<ShoppingCartOutlined style={{ fontSize: "24px" }} />}
        className={classes.cartButton}>
        {/* suppressHydrationWarning because data is first rendered with initial 0, then updated afterwards from localStorage */}
        {cartItems && cartItems.length > 0 && (
          <span className={classes.cartBadge}>{cartItems.length}</span>
        )}
      </Button>
    </Link>
  );
};
