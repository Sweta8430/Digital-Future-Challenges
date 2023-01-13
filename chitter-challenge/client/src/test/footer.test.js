import Footer from "../Components/Statics/Footer/Footer";
import { render } from "@testing-library/react";

describe("Footer component test", () => {
  it("Footer matched the snapshot", () => {
    const footerComp = render(<Footer />);
    expect(footerComp).toMatchSnapshot();
  });
});
