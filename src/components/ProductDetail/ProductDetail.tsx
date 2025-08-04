'use client';

import React, { use, useContext } from 'react';
import Image from 'next/image';
import classes from './ProductDetail.module.css';
import { IProduct } from '@/types';
import { CartContext } from '@/store/cart-context-provider';
import { QuantityControls } from '../ui/QuantityControls';
import { useCartActionsWithToast } from '@/hooks/useCartActionsWithToast';
import Button from '../ui/Button/Button';
import { formatPrice } from '@/utils/formatPrice';
import { AnimationSection } from '../ui/AnimationSection';

type ProductDetailProps = {
	productDetailsPromise: Promise<IProduct>;
};

export const ProductDetail = ({ productDetailsPromise }: ProductDetailProps) => {
	console.log('ProductDetail productDetailsPromise', productDetailsPromise);
	const productDetails = use(productDetailsPromise);
	const { getProductQuantityInCart } = useContext(CartContext);
	const { handleAddToCart, handleRemoveFromCart } = useCartActionsWithToast();

	if (productDetails === undefined) {
		return <p>Product not found</p>;
	}

	return (
		<AnimationSection
			direction='none'
			delay={200}
			duration={1200}>
			<div className={classes.productDetailContainer}>
				<div className={classes.productImageRow}>
					<div className={classes.productImageContainer}>
						<Image
							src={productDetails.image}
							alt={productDetails.title}
							fill
							className={classes.productImage}
						/>
					</div>
				</div>
				<div className={classes.productInfoRow}>
					<h1 className={classes.productTitle}>{productDetails.title}</h1>
					<p className={classes.productDescription}>{productDetails.description}</p>
					<p className={classes.productPrice}>
						{formatPrice(productDetails.price.toFixed(2), 'CHF')}
					</p>
					{getProductQuantityInCart(productDetails) > 0 ? (
						<QuantityControls
							quantity={getProductQuantityInCart(productDetails)}
							onIncreaseAction={handleAddToCart}
							onDecreaseAction={handleRemoveFromCart}
							item={productDetails}
						/>
					) : (
						<Button
							buttonText='Add to Cart'
							onClickFunction={() => handleAddToCart(productDetails)}
							customStyles={{ width: '104px' }}
						/>
					)}
				</div>
			</div>
		</AnimationSection>
	);
};
