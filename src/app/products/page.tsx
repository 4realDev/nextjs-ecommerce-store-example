import { Suspense } from 'react';
import { ProductList } from '@/components/ProductList/ProductList';
import classes from './page.module.css';
import Image from 'next/image';

export default async function ProductPage() {
	return (
		<>
			<div className={classes.banner}>
				<h1 className={classes.bannerTitle}>Welcome to Our Products</h1>
				<p className={classes.bannerDescription}>
					Explore our exclusive range of products tailored just for you.
				</p>
				<div className={classes.imageContainer}>
					<Image
						src='https://picsum.photos/200/300'
						alt='Product Banner'
						fill
						className={classes.bannerImage}
						priority
					/>
				</div>
				<button className={classes.shopNowBannerButton}>Shop Now</button>
			</div>
			<div className={classes.container}>
				<h1 className={classes.title}>Products</h1>
				<p className={classes.description}>
					Discover our exclusive range of products tailored just for you.
				</p>
				<Suspense fallback={<div>Loading products...</div>}>
					<ProductList />
				</Suspense>
			</div>
		</>
	);
}
