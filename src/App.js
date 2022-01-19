import React from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="container-sm my-3">
			<Navbar />
			<Header />
			<Container />
			<Footer />
		</div>
	);
};

export default App;
