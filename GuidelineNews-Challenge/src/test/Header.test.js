import { render, screen } from "@testing-library/react";
import Header from "../Components/Header/Header";

describe("Tests for Header Component", () => {
  it("Header matched the snapshot", () => {
    const headerComponent = render(<Header />);
    expect(headerComponent).toMatchSnapshot();
  });
});
