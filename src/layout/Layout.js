import React from "react";
import NavBar from "./NavBar";
import ProjectRoutes from "./ProjectRoutes";
import "./Layout.css"

function Layout() {
	return (
		<div>
		<div className="container mx-auto mb-8 px-8 md:px-24">
			<NavBar />
		</div>
		<div className="container mx-auto mb-8 px-8">
			<ProjectRoutes />
		</div>
		</div>
	)	
}

export default Layout