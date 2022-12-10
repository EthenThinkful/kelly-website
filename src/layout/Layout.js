import React from "react";
import Menu from "./Menu";
import Routes from "./Routes";
import "./Layout.css"

function Layout() {
	return (
		<div>
		<div className="navigation">
			<Menu />
		</div>
		<div className="routes">
			<Routes />
		</div>
		</div>
	)	
}

export default Layout