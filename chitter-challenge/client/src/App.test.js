import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("Testing the App compoents Renders as Expected", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
  describe("App component test suite", () => {
    it("should render home page", () => {
      expect(
        screen.getByText(
          "Signup /Login now to get your own personalized timeline!"
        )
      ).toBeInTheDocument();
    });
    it("should render home page", () => {
      expect(screen.getByText("New to Chitter?")).toBeInTheDocument();
    });
    it("should render home page", () => {
      expect(screen.getByText("Chitter 2022")).toBeInTheDocument();
    });
    it("should render home page", () => {
      expect(screen.getByText("Login")).toBeInTheDocument();
    });
    it("should render home page", () => {
      expect(screen.getByText("Sign Up")).toBeInTheDocument();
    });
  });
});
