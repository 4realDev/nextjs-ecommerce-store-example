import { NavigationRoutes } from '@/constants/routes';
import { CartContext } from '@/store/cart-context-provider';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React, { useContext } from 'react';
import classes from './CartButton.module.css';

export const CartButton = () => {
	const { cartItems } = useContext(CartContext);
	console.log('CartButton cartItems', cartItems);
	return (
		<Link href={NavigationRoutes.CART}>
			<button className={classes.cartButton}>
				<ShoppingCartOutlined />
				{/* suppressHydrationWarning because data is first rendered with initial 0, then updated afterwards from localStorage */}
				{cartItems && cartItems.length > 0 && (
					<span className={classes.cartBadge}>{cartItems.length}</span>
				)}
			</button>
		</Link>
	);
};
