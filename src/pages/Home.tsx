import CurrTitle from "../components/CurrTitle";
import Feed from "../components/Feed";
import { useEffect, useState } from "react";
import Api from "../api/api";
import Card from "../components/Card";

// Define an interface for the expected data structure
type ProductOBj = {
	title: string;
	images: string[];
	price: number;
	category: string;
	description: string;
	id: number;
};
interface Product {
	limit: number;
	products: ProductOBj[];
	skip: number;
	total: number;
}

function Home() {
	let { baseurl, fetch_products } = Api;
	let [data, setData] = useState<Product | null>();

	useEffect(function () {
		let fetchData = async () => {
			setData(await fetch_products(baseurl, 20));
		};

		fetchData();
	}, []);

	// Now TypeScript knows the structure of each item in the array
	let cards: JSX.Element[] | null = data?.products
		? data?.products?.map(
				({ title, id, price, description, images,category }: ProductOBj) => {
					return (
						<Card
							key={id}
							title={title}
							id={id}
							price={price}
							desription={description}
							images={images}
							category={category}
						/>
					);
				}
		  )
		: null;
	return (
		<div className="home">
			<div className="strict_width">
				<CurrTitle title="Featured" subTitle="latest additions to the store" />
			</div>
			<button
				onClick={() => {
					console.log(data);
				}}
			>
				click me
			</button>
			<Feed content={cards ? cards : null} />
		</div>
	);
}

export default Home;
