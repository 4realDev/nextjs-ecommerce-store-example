import Link from 'next/link';
import React from 'react';
import classes from './NavBar.module.css';
import { NavigationRoutes } from '@/constants/routes';

export const NavBar = () => {
	return (
		<nav className={classes.navbar}>
			<Link
				href='/'
				className={classes.logo}>
				E-Commerce Shop
			</Link>
			<ul className={classes.navLinks}>
				<li>
					<Link
						href={NavigationRoutes.HOME}
						className={classes.navItem}>
						Home
					</Link>
				</li>
				<li className={classes.navItem}>
					<Link href={NavigationRoutes.PRODUCTS}>Products</Link>
				</li>
				<li className={classes.navItem}>
					<Link href={NavigationRoutes.CART}>Cart</Link>
				</li>
			</ul>
			{/* <Link
						href='/login'
						className={classes.loginButton}>
						Login
					</Link> */}
		</nav>
	);
};
