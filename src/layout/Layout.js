import React from "react";
import Menu from "./Menu";
import Carousel from "./Carousel";
import ProjectRoutes from "./ProjectRoutes";
import "./Layout.css"

function Layout() {
	return (
		<div>
		<div className="container mx-auto mb-8 px-8">
			<Menu />
			<Carousel />
		</div>
		<div className="routes">
			<ProjectRoutes />
		</div>
		</div>
	)	
}

export default Layout