import { ProductDetail } from '@/components/ProductDetail';
import classes from './page.module.css';
import { getProductById } from '@/app/api/modules/product';
import { Suspense } from 'react';
import { ProductDetailSkeleton } from '@/components/ProductDetail/ProductDetailSkeleton';

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const productDetailsPromise = getProductById(id);
	return (
		<div className={classes.container}>
			<Suspense fallback={<ProductDetailSkeleton />}>
				<ProductDetail productDetailsPromise={productDetailsPromise} />
			</Suspense>
		</div>
	);
}
