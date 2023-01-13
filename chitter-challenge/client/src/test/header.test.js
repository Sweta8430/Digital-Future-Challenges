import Header from "../Components/Statics/Header/Header";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Header component test", () => {
  it("Header matched the snapshot", () => {
    const headerComponent = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(headerComponent).toMatchSnapshot();
  });
});
