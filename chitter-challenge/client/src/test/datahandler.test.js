import axiosMock from "axios";
import {
  getPeepData,
  addPeepData,
  registerData,
  loginData,
} from "../Components/AsyncFunctions/dataHandlers.js";

jest.mock("axios");

describe("Checking the Data Handlers (Post/Get) Requests Tests", () => {
  const testSetErrorStatus = jest.fn();
  const testSetPeeps = jest.fn();

  describe("getPeepData API tests", () => {
    beforeEach(() => {
      axiosMock.get.mockResolvedValueOnce([
        { author: "testuname", title: "Peep", message: "First Peep" },
      ]);
      getPeepData(testSetPeeps, testSetErrorStatus);
    });

    it("should make a get request via axios", () => {
      expect(axiosMock.get).toHaveBeenCalledTimes(1);
    });

    it("should call testSetPeeps when response returns valid data", () => {
      expect(testSetPeeps).toHaveBeenCalledTimes(1);
    });
  });

  describe("addPeeps tests", () => {
    const getPeepHandler = jest.fn();
    const setErrorStatus = jest.fn();
    const setResponse = jest.fn();
    const testpeep = {
      author: `testname`,
      title: "hello",
      message: "hello from peep",
    };
    const error = {
      message: `Peep Insertion Fails`,
    };

    describe("Base Request", () => {
      beforeEach(() => {
        addPeepData(testpeep, getPeepHandler, setErrorStatus, setResponse);
      });
      test("should have made a post request to axios", () => {
        expect(axiosMock.post).toHaveBeenCalledTimes(1);
      });
      it("should Called with Tests Peep Data", () => {
        expect(axiosMock.post).toHaveBeenCalledWith(
          `http://localhost:4000/addpeeps`,
          testpeep
        );
      });
    });
    describe("Successful POST requests", () => {
      beforeEach(() => {
        axiosMock.post.mockResolvedValueOnce({ status: 201 });
        addPeepData(testpeep, getPeepHandler, setErrorStatus, setResponse);
      });
      test("should have made a post request to axios", () => {
        expect(getPeepHandler).toHaveBeenCalledTimes(1);
      });
    });

    describe("Unsuccessful POST requests", () => {
      beforeEach(() => {
        axiosMock.post.mockRejectedValueOnce(error);
        addPeepData(testpeep, getPeepHandler, setErrorStatus, setResponse);
      });

      test("should call setErrorStatus with error.message when successful POST is made", () => {
        expect(setErrorStatus).toHaveBeenCalledTimes(1);
        expect(setErrorStatus).toHaveBeenCalledWith(error.message);
      });
    });
  });

  describe("Login Form tests", () => {
    const setErrorStatus = jest.fn();
    const setResponse = jest.fn();
    const setLoggedIn = jest.fn();
    const setUser = jest.fn();
    const testlogin = {
      email: `test@gmail.com`,
      pwd: `password`,
    };
    const error = {
      message: `Username or Password wrong. Please try Again!`,
    };

    describe("Base Request", () => {
      beforeEach(() => {
        loginData(testlogin, setErrorStatus, setResponse, setLoggedIn, setUser);
      });
      test("should have made a post request to axios", () => {
        expect(axiosMock.post).toHaveBeenCalledTimes(1);
      });
      it("should Called with Login Data", () => {
        expect(axiosMock.post).toHaveBeenCalledWith(
          `http://localhost:4000/login`,
          testlogin
        );
      });
    });
    describe("Unsuccessful POST requests", () => {
      beforeEach(() => {
        axiosMock.post.mockRejectedValueOnce(error);
        loginData(testlogin, setErrorStatus, setResponse, setLoggedIn, setUser);
      });

      test("should call setErrorStatus with error.message when successful POST is made", () => {
        expect(setErrorStatus).toHaveBeenCalledTimes(1);
        expect(setErrorStatus).toHaveBeenCalledWith(error.message);
      });
    });
  });
  describe("SignUp Form tests", () => {
    const setErrorStatus = jest.fn();
    const setResponse = jest.fn();
    const testsignup = {
      fname: `testfname`,
      lname: `testfname`,
      userhandler: `testuser`,
      email: `test@gmail.com`,
      pwd: `password`,
    };
    const error = {
      message: `Invalid Data Please try Again!`,
    };

    describe("Base Request", () => {
      beforeEach(() => {
        registerData(testsignup, setErrorStatus, setResponse);
      });
      test("should have made a post request to axios", () => {
        expect(axiosMock.post).toHaveBeenCalledTimes(1);
      });
      it("should Called with SignUp Data", () => {
        expect(axiosMock.post).toHaveBeenCalledWith(
          `http://localhost:4000/signup`,
          testsignup
        );
      });
    });
    describe("Unsuccessful POST requests", () => {
      beforeEach(() => {
        axiosMock.post.mockRejectedValueOnce(error);
        registerData(testsignup, setErrorStatus, setResponse);
      });

      test("should call setErrorStatus with error.message when successful POST is made", () => {
        expect(setErrorStatus).toHaveBeenCalledTimes(1);
        expect(setErrorStatus).toHaveBeenCalledWith(error.message);
      });
    });
  });
});
