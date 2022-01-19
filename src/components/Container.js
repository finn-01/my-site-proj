import React from "react";

import site from "../data.js";
import Site from "./Site";
//import accordion from "../images/accordion.png";

const Container = () => {
	return (
		<div className="my-5">
			<div className="text-center">
				<p className="display-4 black">My Project</p>
				<div className="underline"></div>
			</div>

			<div className="text-center mt-5 row">
				{site.map((item, index) => {
					const { id, title, img, url } = item;

					return (
						<div className="col-lg-4 col-md-6 col-sm-12 " key={index}>
							<Site title={title} img={img} url={url} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Container;
