import { render, screen } from "@testing-library/react";
import newsData from "../mockNewsData.json";
import NewsImage from "../Components/Headlines/NewsImage";

describe("Testing the Newsline Image", () => {
  it("should render image passed as props with attributes ", () => {
    const testImg = newsData.response.results[0].fields.thumbnail;
    const testAlt = newsData.response.results[0].fields.byline;
    render(<NewsImage image={testImg} alt={testAlt} />);
    const img = screen.getByRole(`img`);
    expect(img).toHaveAttribute(`src`, testImg);
    expect(img).toHaveAttribute(`alt`, testAlt);
  });
});
