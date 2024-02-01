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

	// API functions for fetching products and categories
	let { fetch_products_cat, fetch_categories } = Api;

	// Define interfaces and types for better type checking
	interface Product {
		title: string;
		images: string[];
		image?: string;
		price: number;
		category: object;
		description: string;
		id?: number | unknown;
	}

	type CategoryProp = {
		creationAt: Date;
		id: number;
		image: string;
		name: string;
		updatedAt: Date;
	};

	type SelectProp = {
		id: number;
		text: string;
	};

	// State variables for managing component state
	let [data, setData] = useState<Product[]>([]);
	let [categories, setCategories] = useState<CategoryProp[]>();
	let [selected, setSelect] = useState<SelectProp>();

	// Effect to fetch products when the component mounts
	useEffect(
		function () {
			let fetchData = async () => {
				categories?.forEach(async ({ id, name }) => {
					if (cat == name) {
						setData(await fetch_products_cat(id, 1));
					}
				});
			};
			fetchData();
		},
		[selected]
	);

	// Effect to fetch categories when the component mounts
	useEffect(() => {
		let fetcher = async () => {
			let resp = await fetch_categories().then((res) => {
				setSelect({ id: res[0].id, text: res[0].name });
				return res;
			});

			return setCategories(resp);
		};
		fetcher();
	}, []);

	// Effect to update URL search parameter when the selected category changes
	useEffect(() => {
		if (selected) {
			setSearchParams({ category: selected.text });
		}
	}, [selected]);

	let cards: JSX.Element[] = data?.map(
		({ id, category, price, title, description, images }, key) => {
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
		<div className="categories">
			<div className="strict_width">
				<CurrTitle title="Categories" subTitle="List of Products" />

				<Feed />

				<select
					onChange={(e) => {
						let number = e.target.value;
						categories?.forEach(({ id, name }) => {
							if (id == Number(number)) {
								// Update the selected category when the dropdown changes
								setSelect({ id: id, text: name });
							}
						});
					}}
					className="category_select"
				>
					{/* Render category options */}
					{categories?.map(({ name, id }) => (
						<option key={id} value={id}>
							{name}
						</option>
					))}
				</select>

				{/* Button for debugging/logging */}
				<button
					onClick={() => {
						console.log(data);
					}}
				>
					Click me
				</button>

				<Feed content={cards} />
			</div>
		</div>
	);
}

export default Categories;
