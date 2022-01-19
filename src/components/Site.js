import React from "react";

const Site = ({ title, img, url }) => {
	return (
		<div className="w-450 h-240 p-2 ">
			<a className="text-decoration-none" href={url} target="_blank">
				<div className="img-container-site">
					<img src={img} className="overflow-hidden d-block img-site" />
				</div>
				<h3 className="mt-3 flicker-1 black">{title}</h3>
			</a>
		</div>
	);
};

export default Site;
