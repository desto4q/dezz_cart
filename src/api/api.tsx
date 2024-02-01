// import axios from "axios"
let baseurl: string = "https://dummyjson.com/products";
import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";
const instance = Axios.create();
const axios = setupCache(instance);

let fetch_products = async (url: string, limit: number) => {
	let structured_url: string = url + "?limit=" + limit;

	let { data } = await axios.get(structured_url);
	return data;
	//
};

let fetch_products_cat = async (category: string) => {

	let url = " https://dummyjson.com/products/category/";
	let structured_url = url + category;

	let { data } = await axios.get(structured_url);

	return data;
};

let fetch_categories = async () => {
	let { data } = await axios.get("https://dummyjson.com/products/categories");
	return data;
};

export default {
	fetch_products,
	baseurl,
	fetch_products_cat,
	fetch_categories,
};
