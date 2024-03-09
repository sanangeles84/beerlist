import { render, screen } from "@testing-library/react";
import Beers from "../Beers";

test("Beers test", () => {
	const testBeer = {
		id: 123,
		name: "Beer Test Name",
		description: "Beer description"
	};
	render(<Beers list={[{ ...testBeer }]} />);
	const linkList = screen.getByTestId("beersList", { key: testBeer.id });
	expect(linkList).toBeInTheDocument();
	const linkBeerName = screen.getByText(testBeer.name);
	expect(linkBeerName).toBeInTheDocument();
	const linkBeerDescription = screen.getByText(testBeer.description);
	expect(linkBeerDescription).toBeInTheDocument();
});
