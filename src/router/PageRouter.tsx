import Heading from "../components/Heading";
import Nav from "../components/Nav";
import Genre from "../pages/Genre";
import Home from "../pages/Home";
import Currloc from "../components/Currloc";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Title from "../components/Title";
import Footer from "../components/Footer";
import Categories from "../pages/Categories";

function PageRouter() {
	return (
		<>
			<Heading />

			<BrowserRouter>
				<Title />
				<Nav />
				<Currloc />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Genre" element={<Genre />} />
					<Route path="/categories" element={<Categories />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default PageRouter;
