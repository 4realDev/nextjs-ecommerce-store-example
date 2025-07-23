import { IProduct } from '@/types';
import { request } from '../../config/axios';
import { ApiEndpoints } from '@/constants/routes';

export const getProducts = async () => {
	const response = request<IProduct[]>({
		method: 'GET',
		url: ApiEndpoints.PRODUCTS,
	});
	// Simulate 3s network delay
	await new Promise((resolve) => setTimeout(resolve, 3000));
	return response;
};
