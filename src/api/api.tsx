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

let fetch_products_cat = async (category: number, offset: number) => {
	let url = " https://api.escuelajs.co/api/v1/products/";
	let structured_url = url + "?categoryId=" + category;
	+"&offset=" + offset;
	let { data } = await axios.get(structured_url);

	return data;
};

let fetch_categories = async () => {
	let { data } = await axios.get("https://api.escuelajs.co/api/v1/categories");
	return data;
};

export default {
	fetch_products,
	baseurl,
	fetch_products_cat,
	fetch_categories,
};
