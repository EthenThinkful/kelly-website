import React from "react";

function ErrorAlert({error}) {
	return (
		error && (
			<div className="ErrorAlert">Error: {error.message}</div>
		)
	)
}

export default ErrorAlert;