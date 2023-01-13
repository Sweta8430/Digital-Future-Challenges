import { render, screen } from "@testing-library/react";
import HeadlineSummary from "../Components/HeadLineSummary/HeadlineSummary";
import newsData from "../mockNewsData.json";
describe("Testing the News Headlines Summary ", () => {
  it("should render <HeadlineSummary/>", () => {
    const Summary = render(
      <HeadlineSummary newsdata={newsData.response.results} />
    );
    expect(Summary).toBeTruthy();
  });
});
