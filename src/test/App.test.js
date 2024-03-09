import { render, screen } from "@testing-library/react";
import App from "../App";

test("App test", () => {
	render(<App />);
	const linkElement = screen.getByText(/Beer List/);
	expect(linkElement).toBeInTheDocument();
});
