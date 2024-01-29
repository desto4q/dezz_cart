import axios from "axios"
let baseurl: string = "https://api.escuelajs.co/api/v1/products"

let fetch_products = async (url: string, offset: number, limit: number) => {
    let structured_url: string = url + "?offset=" + offset + "&limit=" + limit
    // let response = await fetch(structured_url).then((resp) => {
    //     // return (
    //     //     resp.json()
    //     // )
    //     console.log(resp.json())
    // })

    let {data} = await axios.get(structured_url)
    return data
    // 

}

export default { fetch_products, baseurl }