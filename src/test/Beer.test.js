import { render, screen } from "@testing-library/react";
import Beer from "../Beer";

test("Beer test", () => {
	const testBeer = {
		id: 123,
		name: "Beer Test Name",
		description: "Beer description"
	};
	render(<Beer {...testBeer} />);
	const linkList = screen.getByTestId("beer", { key: testBeer.id });
	expect(linkList).toBeInTheDocument();
	const linkBeerName = screen.getByText(testBeer.name);
	expect(linkBeerName).toBeInTheDocument();
	const linkBeerDescription = screen.getByText(testBeer.description);
	expect(linkBeerDescription).toBeInTheDocument();
});
