import React, { useEffect, useState } from "react";
import CurrTitle from "../components/CurrTitle";
import Feed from "../components/Feed";
import Api from "../api/api";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";

function Categories() {
	// Use the useSearchParams hook to access and modify URL search parameters
	let [searchParams, setSearchParams] = useSearchParams();
	let cat = searchParams.get("category");

	let { fetch_products_cat, fetch_categories } = Api;

	// Define interfaces and types for better type checking
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

	// State variables for managing component state
	let [data, setData] = useState<Product | null>();
	let [categories, setCategories] = useState<string[]>();
	let [selected, setSelect] = useState<string>("");

	useEffect(() => {
		let fetcher = async () => {
			let resp = await fetch_categories().then(async (res) => {
				if (cat) {
					setSelect(cat);
					setData(await fetch_products_cat(cat));
					return res;
				}

				setSelect((prev) => (prev = res[0]));
				setData(await fetch_products_cat(res[0]));
				return res;
			});
			return setCategories(resp);
		};
		fetcher();
	}, []);

	useEffect(() => {
		let fetcher_cats = async (selection: string) => {
			setData(await fetch_products_cat(selection));
		};

		if (selected) {
			setSearchParams({ category: selected });
			fetcher_cats(selected);
		}
	}, [selected]);

	let cards: JSX.Element[] | null = data?.products
		? data?.products?.map(
				({ title, id, price, description, images, category }: ProductOBj) => {
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
		<div className="categories">
			<div className="strict_width">
				<CurrTitle title="Categories" subTitle="List of Products" />

				{/* Use Feed with content={cards} */}

				<div className="selected_value">
					selected:  
					<span> { selected}</span>
				</div>

				<select
					onChange={(e) => {
						setSelect(e.target.value);
					}}
					className="category_select"
				>
					{/* Render category options */}
					{categories?.map((item) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</select>

				{/* Button for debugging/logging */}
				<button
					onClick={() => {
						console.log(selected);
					}}
				>
					Click me
				</button>
				<Feed  content={cards} />
			</div>
		</div>
	);
}

export default Categories;
