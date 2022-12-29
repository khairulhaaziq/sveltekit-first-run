export const load = async () => {
	const fetchProducts = async () => {
		const res = await fetch('https://dummyjson.com/products?limit=10');
		const data = await res.json();
		return data.products;
	};

	return { products: fetchProducts() };
};
