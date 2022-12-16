import React from "react";
import Menu from "./Menu";
import Carousel from "./Carousel";
import Routes from "./Routes";
import "./Layout.css"

function Layout() {
	return (
		<div>
		<div className="container mx-auto mb-8 px-8">
			<Menu />
			<Carousel />
		</div>
		<div className="routes">
			<Routes />
		</div>
		</div>
	)	
}

export default Layout