import { render, screen } from "@testing-library/react";
import LoginForm from "../Components/Login/LoginForm";
import userEvent from "@testing-library/user-event";

describe("Login Form tests", () => {
  const mockloginHandler = jest.fn();
  const response = "success";

  beforeEach(() => {
    render(<LoginForm loginHandler={mockloginHandler} response={response} />);
  });

  describe("Initial Render and Form Input Tests", () => {
    it("should render Login Details as Title", () => {
      expect(screen.getByText(/Login Details/i)).toBeInTheDocument();
    });
    it("should render Password Input type in the form", () => {
      expect(screen.getByText(/Password:/i)).toBeInTheDocument();
    });
    it("should render UserName Input type in the form", () => {
      expect(screen.getByText(/Email:/i)).toBeInTheDocument();
    });
  });

  describe("Test Login Forms Input", () => {
    it("should render the username value when typed", () => {
      const testName = `test`;
      const nameInput = screen.getByPlaceholderText(/example@test.com/i);
      userEvent.type(nameInput, testName);
      expect(nameInput).toHaveValue(testName);
    });
    it("should render the password value when typed", () => {
      const testPwd = `password`;
      const pwdInput = screen.getByPlaceholderText("6+ Characters..");
      userEvent.type(pwdInput, testPwd);
      expect(pwdInput).toHaveValue(testPwd);
    });
  });

  describe("Login Tests", () => {
    test("should make a call to mockloginHandler when Login is clicked", () => {
      // Arrange
      const testLogin = {
        email: `test`,
        pwd: `password`,
      };
      const nameInput = screen.getByPlaceholderText("example@test.com");
      const pwdInput = screen.getByPlaceholderText("6+ Characters..");
      const loginButton = screen.getByText("Login");
      // Act
      userEvent.type(nameInput, testLogin.email);
      userEvent.type(pwdInput, testLogin.pwd);
      userEvent.click(loginButton);
      // Assert
      expect(mockloginHandler).toHaveBeenCalledTimes(1);
      expect(mockloginHandler).toHaveBeenCalledWith(testLogin);
    });
  });
});
