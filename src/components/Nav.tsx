import { IconSearch, IconShoppingBag } from "@tabler/icons-react";
import { useState } from "react";

import { Spin as Hamburger } from "hamburger-react";
import { nav_links } from "../data/data";
import { Link } from "wouter";
function Nav() {
	let [sideNav, SetSideNav] = useState<boolean>(false);
	return (
		<nav>
			<div className={`sideNav ${sideNav ? "sideNav_active" : null}`}>
				<div className="hamburger_cont_Side">
					<Hamburger size={28} toggled={sideNav} toggle={SetSideNav} />
				</div>
			</div>
			<div className="strict_width">
				<div className="logo">ConForm</div>

				<div className="links">
					<div className="left">ConForm</div>
					<span>
						{nav_links.map(({ text, path }) => {
							return (
								<Link to={path} key={text}>
									{text}
								</Link>
							);
						})}
					</span>

					<div className="cart">
						<a href="#" className="icon">
							<IconShoppingBag />
						</a>
						<a href="#" className="search">
							<IconSearch />
						</a>
					</div>

					<div className="hamburger_cont">
						<Hamburger size={28} toggled={sideNav} toggle={SetSideNav} />
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
