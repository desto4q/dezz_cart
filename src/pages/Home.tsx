import CurrTitle from "../components/CurrTitle"
import Feed from "../components/Feed"
import { useEffect, useState } from "react";
import Api from "../api/api"

function Home() {

  let { baseurl, fetch_products } = Api
  let [data, setData] = useState<any>()


  useEffect(function () {
    let damn = async () => {
      setData(await fetch_products(baseurl, 0, 10))
    };
    damn()

  }, [])
  useEffect(() => {
    if (data) {
      console.log(data)
    }
  }, [data])
  return (
    <div className="home">
      <div className="strict_width">
        <CurrTitle title="Featured" subTitle="latest additions to the store" />
      </div>
      <Feed content={""} />
    </div>
  )
}

export default Home