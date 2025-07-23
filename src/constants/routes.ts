export const NavigationRoutes = {
	HOME: '/',
	PRODUCTS: '/products',
	CART: '/cart',
	PRODUCT_DETAILS: (id: string) => `/products/${id}`,
} as const;

export const ApiEndpoints = {
	PRODUCTS: '/products',
} as const;
