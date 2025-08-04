'use client';

import { useContext } from 'react';
import type { IProduct } from '../types';
import { toast } from 'react-toastify';
import { CartContext } from '@/store/cart-context-provider';

export const useCartActionsWithToast = () => {
	const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);

	const notifyAddToCartToast = (product: IProduct) =>
		toast.success(`${product.title} added to cart!`, {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			theme: 'colored',
			style: {
				backgroundColor: '#fff',
				color: '#000',
			},
		});

	const notifyRemoveFromCartToast = (product: IProduct) =>
		toast.error(`${product.title} removed from cart!`, {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			theme: 'colored',
			style: {
				backgroundColor: '#000',
				color: '#fff',
			},
		});

	const notifyCartClearedToast = () =>
		toast.error(`Cart cleared!`, {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			theme: 'colored',
			style: {
				backgroundColor: '#000',
				color: '#fff',
			},
		});

	const handleAddToCart = (product: IProduct) => {
		addToCart(product);
		notifyAddToCartToast(product);
	};

	const handleRemoveFromCart = (product: IProduct) => {
		removeFromCart(product);
		notifyRemoveFromCartToast(product);
	};

	const handleClearCart = () => {
		clearCart();
		notifyCartClearedToast();
	};

	return { cartItems, handleAddToCart, handleRemoveFromCart, handleClearCart };
};
