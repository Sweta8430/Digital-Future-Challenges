import { render, screen } from "@testing-library/react";
import Headlines from "../Components/Headlines/Headlines";

describe("Testing the Headlines", () => {
  it("It should render the passed headline prop", () => {
    const mockHealines = `test`;
    render(<Headlines headline={mockHealines} />);
    expect(screen.getByTestId(`testdata`)).toHaveTextContent(mockHealines);
  });
});
