import React from "react";
import { Link } from "react-router-dom";
import AddContact from "../views/AddContact.jsx";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Contact List</span>
			</Link>
			<div className="ml-auto">
					<Link to="/addcontact">
					<button className="btn btn-primary">Add a Contact</button>
					</Link>
			</div>
		</nav>
	);
};
