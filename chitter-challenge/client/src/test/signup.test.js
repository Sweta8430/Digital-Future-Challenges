import { render, screen } from "@testing-library/react";
import SignUpForm from "../Components/SignUp/SignUpForm";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("Signup Form tests", () => {
  const mocksignupHandler = jest.fn();
  const response = "success";

  beforeEach(() => {
    render(
      <MemoryRouter>
        <SignUpForm signupHandler={mocksignupHandler} response={response} />
      </MemoryRouter>
    );
  });
  describe("Initial Render and Form Input Tests", () => {
    it("should render Signup Title as Expected", () => {
      expect(screen.getByText(/Create New Account/i)).toBeInTheDocument();
    });
    it("should render first name Input type in the form", () => {
      expect(screen.getByText(/First Name:/i)).toBeInTheDocument();
    });
    it("should render lastname name Input type in the form", () => {
      expect(screen.getByText(/Last Name:/i)).toBeInTheDocument();
    });
    it("should render lastname name Input type in the form", () => {
      expect(screen.getByText(/User Name:/i)).toBeInTheDocument();
    });
    it("should render email Input type in the form", () => {
      expect(screen.getByText(/Email:/i)).toBeInTheDocument();
    });
    it("should render password Input type in the form", () => {
      expect(screen.getByText("Password:")).toBeInTheDocument();
    });
    it("should render display text Input type in the form", () => {
      expect(screen.getByText(/Already have an account?/i)).toBeInTheDocument();
    });
  });
  describe("Test SignUp Forms Input", () => {
    it("should render the firstname value when typed", () => {
      const testfName = `testfname`;
      const fnameInput = screen.getByPlaceholderText(/First Name.../i);
      userEvent.type(fnameInput, testfName);
      expect(fnameInput).toHaveValue(testfName);
    });
    it("should render the lastname value when typed", () => {
      const testlName = `testlname`;
      const lnameInput = screen.getByPlaceholderText(/Last Name.../i);
      userEvent.type(lnameInput, testlName);
      expect(lnameInput).toHaveValue(testlName);
    });
    it("should render the user value when typed", () => {
      const testuName = `testuser`;
      const unameInput = screen.getByPlaceholderText(/User Name.../i);
      userEvent.type(unameInput, testuName);
      expect(unameInput).toHaveValue(testuName);
    });
    it("should render the Email value when typed", () => {
      const testEmail = `testemail`;
      const emailInput = screen.getByPlaceholderText("example@test.com");
      userEvent.type(emailInput, testEmail);
      expect(emailInput).toHaveValue(testEmail);
    });
    it("should render the password value when typed", () => {
      const testPwd = `password`;
      const pwdInput = screen.getByPlaceholderText("6+ Characters..");
      userEvent.type(pwdInput, testPwd);
      expect(pwdInput).toHaveValue(testPwd);
    });
  });
  describe("SignUp Tests", () => {
    test("should make a call to mocksignupHandler when SignUP is clicked", () => {
      // Arrange
      const testSignup = {
        fname: `testfname`,
        lname: `testlname`,
        userhandler: `testuser`,
        email: `test@gmail.com`,
        pwd: `password`,
      };
      const fnameInput = screen.getByPlaceholderText("First Name...");
      const lnameInput = screen.getByPlaceholderText("Last Name...");
      const userInput = screen.getByPlaceholderText("User Name...");
      const emaileInput = screen.getByPlaceholderText("example@test.com");
      const pwdInput = screen.getByPlaceholderText("6+ Characters..");
      const signupButton = screen.getByText("Sign Up");
      // Act
      userEvent.type(fnameInput, testSignup.fname);
      userEvent.type(lnameInput, testSignup.lname);
      userEvent.type(userInput, testSignup.userhandler);
      userEvent.type(emaileInput, testSignup.email);
      userEvent.type(pwdInput, testSignup.pwd);
      userEvent.click(signupButton);
      // Assert
      expect(mocksignupHandler).toHaveBeenCalledTimes(1);
      expect(mocksignupHandler).toHaveBeenCalledWith(testSignup);
    });
  });
});
