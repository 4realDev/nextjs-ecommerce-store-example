"use client";

import { useCartActionsWithToast } from "@/hooks/useCartActionsWithToast";
import { CartContext } from "@/store/cart-context-provider";
import React, { useContext } from "react";
import classes from "./CartList.module.css";
import { CartItem } from "../CartItem";
import { formatPrice } from "@/utils/formatPrice";
import { AnimationSection } from "../ui/AnimationSection";
import Button from "../ui/Button/Button";

export const CartList = () => {
  const { cartItems, getCartTotal } = useContext(CartContext);
  const { handleAddToCart, handleRemoveFromCart, handleClearCart } =
    useCartActionsWithToast();

  if (cartItems.length === 0) {
    return (
      <div className={classes.cart}>
        <h1 className={classes.emptyCartMessage}>Your cart is empty</h1>
      </div>
    );
  }

  return (
    <div className={classes.cart}>
      <div className={classes.cartItemsContainer}>
        {cartItems.map((cartItem) => (
          <AnimationSection
            direction="right"
            duration={300}
            key={cartItem.id}>
            <CartItem
              item={cartItem}
              addToCartAction={handleAddToCart}
              removeFromCartAction={handleRemoveFromCart}
            />
          </AnimationSection>
        ))}
      </div>
      {cartItems.length > 0 ? (
        <div className={classes.cartSummary}>
          <h1 className={classes.cartTotal}>
            Total: {formatPrice(getCartTotal().toString(), "CHF")}
          </h1>
          <Button
            className={classes.clearCartButton}
            onClick={handleClearCart}>
            Clear cart
          </Button>
        </div>
      ) : (
        <h1 className={classes.emptyCartMessage}>Your cart is empty</h1>
      )}
    </div>
  );
};
