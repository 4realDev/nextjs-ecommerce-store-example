"use client";

import classes from "./ProductDetail.module.css";
import classesButton from "../ui/Button/Button.module.css";
import { Skeleton } from "../ui/Skeleton/Skeleton";
import Button from "../ui/Button/Button";

export const ProductDetailSkeleton = () => {
  return (
    <div className={classes.productDetailContainer}>
      <div className={classes.productImageRow}>
        <div className={classes.productImageContainer}>
          <Skeleton style={{ width: "100%", height: "100%" }}></Skeleton>
        </div>
      </div>
      <div className={classes.productInfoRow}>
        <div className={classes.productTitle}>
          <Skeleton>
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </Skeleton>
        </div>
        <div className={classes.productDescription}>
          <Skeleton>
            Your perfect pack for everyday use and walks in the forest. Stash
            your laptop (up to 15 inches) in the padded sleeve, your everyday
          </Skeleton>
        </div>
        <div className={classes.productPrice}>
          <Skeleton>CHF 999.99</Skeleton>
        </div>
        {/* Add to Cart Button */}
        <Skeleton>
          <Button className={classesButton.button}>
            <span className={classesButton.buttonText}>Add to Cart</span>
          </Button>
        </Skeleton>
      </div>
    </div>
  );
};
