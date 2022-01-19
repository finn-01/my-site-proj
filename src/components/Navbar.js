import React from "react";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="container-fluid">
				<h2 className="navbar-brand">Finn</h2>

				<ul className="navbar-nav flex-row">
					<li className="nav-item mx-2">
						<a
							className="nav-link"
							href="https://github.com/finn-01"
							target="_blank"
						>
							<i class="bi bi-github fs-2"></i>
						</a>
					</li>
					<li className="nav-item mx-2">
						<a
							className="nav-link"
							href="https://www.instagram.com/_finn.01/"
							target="_blank"
						>
							<i class="bi bi-instagram fs-2"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
