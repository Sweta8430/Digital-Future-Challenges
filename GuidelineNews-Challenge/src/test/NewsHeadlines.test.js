import newsData from "../mockNewsData.json";
import { screen, render } from "@testing-library/react";
import NewsHeadlines from "../Components/Headlines/NewsHeadlines";
import { MemoryRouter } from "react-router-dom";
describe("Testing the News Headlines ", () => {
  it(`it should render the correct number of Headlines based on the mock data supplied`, () => {
    const rowsInNewsData = newsData.response.results.length;
    render(
      <MemoryRouter>
        <NewsHeadlines newsdata={newsData.response.results} />
      </MemoryRouter>
    );
    const numberOfRows = screen.getAllByRole(`img`).length;
    expect(rowsInNewsData).toBe(numberOfRows);
  });
});
