import { render, screen } from "@testing-library/react";
import DisplayForms from "../Components/Home/DisplayForms"

describe("Display Component testing", () => {
  it("should render message as expected with defined heading", () => {
      const loggedIn = true;
      const response = "success";
      render(<DisplayForms loggedIn={loggedIn} response={response } />);
      const message = screen.getByText(`New to Chitter?`);
      expect(message).toBeInTheDocument();
  });
    it("should render login button as expected with the defined text", () => {
      const loggedIn = true;
      const response = "success";
      render(<DisplayForms loggedIn={loggedIn} response={response } />);
      const message = screen.getByText(`Login`);
      expect(message).toBeInTheDocument();
    });
    it("should render signup button as expected with defined text", () => {
      const loggedIn = true;
      const response = "success";
      render(<DisplayForms loggedIn={loggedIn} response={response } />);
      const message = screen.getByText(`Sign Up`);
      expect(message).toBeInTheDocument();
  });
});