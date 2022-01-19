import React from "react";

import avt from "../images/saigon_20.jpg";

const Header = () => {
	return (
		<div className="row mt-4">
			<div className="col-md-6">
				<p className="h1 black text-focus-in black">
					Hi <i className="bi bi-emoji-laughing-fill text-success"></i>, I'm Sam
				</p>
				<p className="mt-3 black">
					I’m currently working on Hoc vien Ky thuat Mat ma (Vietnam Academy of
					Cryptography Techniques)
				</p>
				<p className="black">I’m currently learning Java and ReactJS.</p>
				<p className="black">
					How to reach me{" "}
					<a href="mailto:nguyensam576@gmail.com" className="mx-1 icon-hover">
						<i className="bi bi-envelope-check text-success icon-hover"></i>
					</a>{" "}
					or
					<a
						href="https://www.instagram.com/_finn.01/"
						target="_blank"
						className="mx-2 text-success text-decoration-none font-italic icon-hover"
					>
						Instagram
					</a>
				</p>
				<p className="black">
					Fun fact I play games and go to the GYM very often.
				</p>
			</div>
			<div className="col-md-6">
				<img src={avt} className="img-thumbnail mh-50" />
			</div>
		</div>
	);
};

export default Header;
