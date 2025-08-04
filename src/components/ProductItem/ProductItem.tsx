'use client';

import React from 'react';
import classes from './ProductItem.module.css';
import Image from 'next/image';
import { IProduct } from '@/types';
import Link from 'next/link';
import { QuantityControls } from '../ui/QuantityControls';
import Button from '../ui/Button/Button';
import { formatPrice } from '@/utils/formatPrice';

type ProductItemProps = {
	product: IProduct;
	addToCartAction: (product: IProduct) => void;
	removeFromCartAction: (product: IProduct) => void;
	quantity: number;
};

export const ProductItem = ({
	product,
	addToCartAction,
	removeFromCartAction,
	quantity,
}: ProductItemProps) => {
	return (
		<li
			className={classes.productItem}
			key={product.id}>
			<h3 className={classes.productTitle}>{product.title}</h3>
			<div className={classes.productImageContainer}>
				<Link href={`/products/${product.id}`}>
					<Image
						src={product.image}
						alt={product.title}
						fill
						sizes='100vw'
						className={classes.productImage}
					/>
				</Link>
			</div>
			<p className={classes.productPrice}>Price: {formatPrice(product.price.toString(), 'CHF')}</p>

			{quantity > 0 ? (
				<QuantityControls
					quantity={quantity}
					onIncreaseAction={addToCartAction}
					onDecreaseAction={removeFromCartAction}
					item={product}
				/>
			) : (
				<Button
					buttonText='Add to Cart'
					onClickFunction={() => addToCartAction(product)}
				/>
			)}
		</li>
	);
};
