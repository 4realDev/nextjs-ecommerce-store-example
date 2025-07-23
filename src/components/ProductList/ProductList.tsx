'use client';

import React, { use, useContext } from 'react';
import classes from './ProductList.module.css';
import { ProductItem } from '../ProductItem/ProductItem';
import { CartContext } from '@/store/cart-context-provider';
import { ProductsContext } from '@/store/product-context-provider';

export const ProductList = () => {
	const { productsPromise } = useContext(ProductsContext);
	const products = use(productsPromise);
	const { addToCart, removeFromCart, getProductQuantityInCart } = useContext(CartContext);
	return (
		<div className='productsContainer'>
			<ul className={classes.productsGrid}>
				{products.map((product) => (
					<ProductItem
						key={product.id}
						product={product}
						addToCartAction={addToCart}
						removeFromCartAction={removeFromCart}
						quantity={getProductQuantityInCart(product)}
					/>
				))}
			</ul>
		</div>
	);
};
