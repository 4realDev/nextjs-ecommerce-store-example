import React from 'react';
import classes from './Footer.module.css';

export const Footer = () => {
	return (
		<footer className={classes.footer}>
			<p>© 2023 E-Commerce Shop</p>
			{/* <p>
						<Link href='/privacy-policy'>Privacy Policy</Link>
					</p>
					<p>
						<Link href='/terms-of-service'>Terms of Service</Link>
					</p> */}
		</footer>
	);
};
