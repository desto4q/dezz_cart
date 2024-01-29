// import axios from "axios"
let baseurl: string = "https://api.escuelajs.co/api/v1/products"
import Axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';
const instance = Axios.create(); 
const axios = setupCache(instance);

let fetch_products = async (url: string, offset: number, limit: number) => {
    let structured_url: string = url + "?offset=" + offset + "&limit=" + limit
   

    let {data} = await axios.get(structured_url)
    return data
    // 

}

export default { fetch_products, baseurl }