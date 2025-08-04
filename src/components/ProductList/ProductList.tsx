'use client';

import React, { use, useContext, useMemo } from 'react';
import classes from './ProductList.module.css';
import { ProductItem } from '../ProductItem/ProductItem';
import { CartContext } from '@/store/cart-context-provider';
import { ProductsContext } from '@/store/product-context-provider';
import { useCartActionsWithToast } from '@/hooks/useCartActionsWithToast';
import { AnimationSection } from '../ui/AnimationSection';

export const ProductList = () => {
	const { productsPromise, searchTerm } = useContext(ProductsContext);
	const products = use(productsPromise);
	const { getProductQuantityInCart } = useContext(CartContext);
	const { handleAddToCart, handleRemoveFromCart } = useCartActionsWithToast();

	const filteredProducts = useMemo(() => {
		const filteredProducts = products;
		return filteredProducts.filter((product) => {
			const term = searchTerm ? searchTerm.toLowerCase() : '';
			return product.title.toLowerCase().includes(term);
		});
	}, [products, searchTerm]);

	return (
		<ul className={classes.productsGrid}>
			{filteredProducts.map((product) => (
				<AnimationSection
					duration={300}
					key={product.id}>
					<ProductItem
						key={product.id}
						product={product}
						addToCartAction={handleAddToCart}
						removeFromCartAction={handleRemoveFromCart}
						quantity={getProductQuantityInCart(product)}
					/>
				</AnimationSection>
			))}
		</ul>
	);
};
