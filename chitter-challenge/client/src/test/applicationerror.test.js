import { render, screen } from "@testing-library/react";
import ApplicationError from "../Components/Statics/ApplicationError/ApplicationError";

describe("Application Error Component testing", () => {
  it("should remder an error message", () => {
    const errorcode = `404`;
    render(<ApplicationError errorcode={errorcode} />);
    const message = screen.getByText(`An error has occurred:`);
    expect(message).toBeInTheDocument();
  });
});
