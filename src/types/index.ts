export type IProduct = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
};

export type ICartProduct = IProduct & {
	quantity: number;
};
