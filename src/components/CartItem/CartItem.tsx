'use client';

import Image from 'next/image';
import classes from './CartItem.module.css';
import { ICartProduct } from '@/types';
import { QuantityControls } from '../ui/QuantityControls';
import { formatPrice } from '@/utils/formatPrice';
import Link from 'next/link';

type CartItemProps = {
	item: ICartProduct;
	addToCartAction: (item: ICartProduct) => void;
	removeFromCartAction: (item: ICartProduct) => void;
};

export const CartItem = ({ item, addToCartAction, removeFromCartAction }: CartItemProps) => {
	return (
		<div className={classes.cartItem}>
			<div className={classes.cartItemInfo}>
				<div className={classes.cartItemImageContainer}>
					<Link href={`/products/${item.id}`}>
						<Image
							src={item.image}
							alt={item.title}
							fill
							className={classes.cartItemImage}
						/>
					</Link>
				</div>
				<div className={classes.cartItemDetails}>
					<h1 className={classes.cartItemTitle}>{item.title}</h1>
					<p className={classes.cartItemPrice}>{formatPrice(item.price.toString(), 'CHF')}</p>
					<p className={classes.cartItemQuantity}>Quantity: {item.quantity}</p>
					<p className={classes.cartItemTotal}>
						Total: {formatPrice((item.price * item.quantity).toString(), 'CHF')}
					</p>
				</div>
			</div>
			<QuantityControls
				quantity={item.quantity}
				onIncreaseAction={addToCartAction}
				onDecreaseAction={removeFromCartAction}
				item={item}
			/>
		</div>
	);
};
