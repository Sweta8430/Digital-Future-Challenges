import { render, screen } from "@testing-library/react";
import Footer from "../Components/Footer/Footer";
describe("Tests for Footer component", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("Render the footer text as expected to be in document", () => {
    expect(screen.getByText(`© News Today 2022`)).toBeInTheDocument();
  });
  it("Footer matched the snapshot", () => {
    const footerComponent = render(<Footer />);
    expect(footerComponent).toMatchSnapshot();
  });
});
