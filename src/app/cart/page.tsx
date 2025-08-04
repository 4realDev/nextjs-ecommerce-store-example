import classes from './page.module.css';
import { CartList } from '@/components/CartList';

export default async function CartPage() {
	return (
		<>
			<div className={classes.container}>
				<h1 className={classes.title}>Cart</h1>
				<CartList />
			</div>
		</>
	);
}
