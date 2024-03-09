import Beer from "./Beer";

function Beers({ list }) {
	if (list)
		return (
			<>
				<h3>Beers</h3>
				<div className="accordion" id="beersList" data-testid="beersList">
					{list.map((item) => (
						<Beer
							key={item.id}
							id={item.id}
							name={item.name}
							description={item.description}
						/>
					))}
				</div>
			</>
		);
}

export default Beers;
