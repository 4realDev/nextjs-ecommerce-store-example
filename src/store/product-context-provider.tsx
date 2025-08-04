'use client';

import { IProduct } from '@/types';
import { createContext, useState } from 'react';

interface IProductsContext {
	productsPromise: Promise<IProduct[]>;
	searchTerm?: string;
	setSearchTerm?: (term: string) => void;
}

export const ProductsContext = createContext<IProductsContext>({
	productsPromise: Promise.resolve([]),
	searchTerm: '',
	setSearchTerm: () => {}, // Default no-op function
});

export const ProductsContextProvider = ({
	children,
	productsPromise,
}: {
	children: React.ReactNode;
	productsPromise: Promise<IProduct[]>;
}) => {
	const [searchTerm, setSearchTerm] = useState<string>('');

	return (
		<ProductsContext.Provider value={{ productsPromise, searchTerm, setSearchTerm }}>
			{children}
		</ProductsContext.Provider>
	);
};
