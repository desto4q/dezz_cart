import CurrTitle from "../components/CurrTitle";
import Feed from "../components/Feed";
import { useEffect, useState } from "react";
import Api from "../api/api";
import Card from "../components/Card";

// Define an interface for the expected data structure
interface Product {
	title: string;
	images: string[];
	price: number;
	category: object;
	description: string;
}

function Home() {
	let { baseurl, fetch_products } = Api;
	let [data, setData] = useState<Product[]>([]);

	useEffect(function () {
		let fetchData = async () => {
			setData(await fetch_products(baseurl, 0, 10));
		};

		fetchData();
	}, []);

	// Now TypeScript knows the structure of each item in the array
	let cards: JSX.Element[] = data.map(
		({ title, images, price, category, description }, key) => {
			return (
				<Card
					key={key}
					id={0}
					category={category}
					images={[...images]}
					price={price}
					title={title}
					desription={description}
				/>
			);
		}
	);

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
			<Feed content={cards} />
		</div>
	);
}

export default Home;
