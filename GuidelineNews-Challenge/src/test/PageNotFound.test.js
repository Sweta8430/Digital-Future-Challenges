import { render, screen } from "@testing-library/react";
import PageNotFound from "../utils/PageNotFound";

describe("Tests for PageNotFound Error Component", () => {
  it("PageNotFound matched the snapshot", () => {
    const pnfComponent = render(<PageNotFound />);
    expect(pnfComponent).toMatchSnapshot();
  });
});
