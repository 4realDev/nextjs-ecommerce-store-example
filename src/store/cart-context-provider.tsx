'use client';

import React, { createContext, useState } from 'react';
import type { ICartProduct, IProduct } from '../types';

export interface ICartContext {
	cartItems: ICartProduct[];
	addToCart: (product: IProduct) => void;
	removeFromCart: (product: IProduct) => void;
	getCartTotal: () => number;
	getProductQuantityInCart: (product: IProduct) => number;
	clearCart: () => void;
}

export const CartContext = createContext<ICartContext>({
	cartItems: [],
	addToCart: () => {},
	removeFromCart: () => {},
	getCartTotal: () => 0,
	getProductQuantityInCart: () => 0,
	clearCart: () => {},
});

export const CartContextProvider = ({ children }: React.PropsWithChildren) => {
	const [cartItems, setCartItems] = useState<ICartProduct[]>([]);

	const getProductQuantityInCart = (product: IProduct) => {
		const cartItem = cartItems.find((item) => item.id === product.id);
		return cartItem ? cartItem.quantity : 0;
	};

	const addToCart = (product: IProduct) => {
		const isItemInCart = cartItems.find((cartItem) => cartItem.id === product.id);
		if (isItemInCart) {
			setCartItems((prevCart) =>
				prevCart.map((cartItem) =>
					cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
				)
			);
		} else {
			setCartItems((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
		}
	};

	const removeFromCart = (product: IProduct) => {
		const isItemInCart = cartItems.find((cartItem) => cartItem.id === product.id);
		if (isItemInCart && isItemInCart.quantity === 1) {
			setCartItems((prevCart) => prevCart.filter((cartItem) => !(cartItem.id === product.id)));
		} else {
			setCartItems((prevCart) =>
				prevCart.map((cartItem) =>
					cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
				)
			);
		}
	};

	const getCartTotal = () => {
		let totalCartPrice = 0;
		cartItems.forEach((cartItem) => {
			totalCartPrice = totalCartPrice + cartItem.price * cartItem.quantity;
		});
		return totalCartPrice;
	};

	const clearCart = () => {
		setCartItems([]);
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				removeFromCart,
				getCartTotal,
				getProductQuantityInCart,
				clearCart,
			}}>
			{children}
		</CartContext.Provider>
	);
};
