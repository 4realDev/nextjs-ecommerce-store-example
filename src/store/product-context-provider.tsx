'use client';

import { IProduct } from '@/types';
import { createContext } from 'react';

interface IProductsContext {
	productsPromise: Promise<IProduct[]>;
}

export const ProductsContext = createContext<IProductsContext>({
	productsPromise: Promise.resolve([]),
});

export const ProductsContextProvider = ({
	children,
	productsPromise,
}: {
	children: React.ReactNode;
	productsPromise: Promise<IProduct[]>;
}) => {
	return (
		<ProductsContext.Provider value={{ productsPromise }}>{children}</ProductsContext.Provider>
	);
};
