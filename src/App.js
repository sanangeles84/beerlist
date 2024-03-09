import "./App.css";
import { useState } from "react";
import Beers from "./Beers";

// const opts = {
// 	method: "POST",
// 	headers: { "Content-Type": "application/json" },
// 	body: JSON.stringify({ query })
// };

function getData(e, setLoading, setBeers) {
	e.preventDefault();
	setLoading(true);

	fetch("https://api.punkapi.com/v2/beers")
		.then((response) => response.json())
		.then((res) => new Promise((resolve) => setTimeout(() => resolve(res), 1000))) //simulate loading time
		.then((res) => {
			setLoading(false);
			return res;
		})
		.then(setBeers);
}

function App() {
	const [beers, setBeers] = useState(null);
	const [loading, setLoading] = useState(false);
	return (
		<div className="container-fluid w-100 p-0">
			<header className="main bg-primary w-100">
				<nav className="navbar justify-content-center text-white fs-1 w-100">Beer List</nav>
			</header>

			<main className="flex-fill p-2 mb-5" style={{ flex: 1 }}>
				{beers ? (
					<Beers list={beers} />
				) : loading ? (
					<p>Loading ...</p>
				) : (
					<div className="App-btGetData">
						<button
							className="btn btn-primary"
							onClick={(e) => getData(e, setLoading, setBeers)}
						>
							Get Data
						</button>
					</div>
				)}
			</main>
			<footer className="footer fixed-bottom bg-primary text-white fs-5 text-end w-100">
				<div className="container w-100 min-vw-100">
					<div className="me-3">
						API:&nbsp;
						<a className="link-light" href="https://api.punkapi.com/v2/beers">
							https://api.punkapi.com/v2/beers
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
