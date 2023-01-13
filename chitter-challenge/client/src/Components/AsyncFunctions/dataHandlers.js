import axios from "axios";

export const getPeepData = async (setPeeps, setErrorStatus) => {
  try {
    const responsePeepURL = await axios.get(process.env.REACT_APP_GET_PEEP);
    setPeeps(responsePeepURL.data);
  } catch (error) {
    setErrorStatus(error.message);
  }
};

export const addPeepData = async (
  addpeep,
  getPeepHandler,
  setErrorStatus,
  setResponse
) => {
  const { author, title, message } = addpeep;
  try {
    if (author && title && message) {
      const responseAddURL = await axios.post(
        process.env.REACT_APP_ADD_PEEP,
        addpeep
      );
      if (responseAddURL.status === 201) {
        setResponse("Peep Insertion Successful!");
        getPeepHandler();
      }
    } else {
      setResponse(`Invalid input`);
    }
  } catch (error) {
    setErrorStatus(error.message);
  }
};

export const registerData = async (addsignup, setErrorStatus, setResponse) => {
  const { fname, lname, userhandler, email, pwd } = addsignup;
  try {
    if (fname && lname && userhandler && email && pwd) {
      const resSignUpURL = await axios.post(
        process.env.REACT_APP_SIGNUP,
        addsignup
      );
      if (resSignUpURL.status === 200) {
        setResponse(resSignUpURL.data.message);
      }
    } else {
      setResponse(`Invalid Data! Please Try Again!`);
    }
  } catch (error) {
    setErrorStatus(error.message);
  }
};

export const loginData = async (
  getlogin,
  setErrorStatus,
  setResponse,
  setLoggedIn,
  setUser
) => {
  const { email, pwd } = getlogin;
  try {
    if (email && pwd) {
      const resLoginURL = await axios.post(
        process.env.REACT_APP_LOGIN,
        getlogin
      );

      if (resLoginURL.status === 200) {
        if (resLoginURL.data.message === "Login successful!") {
          setLoggedIn(true);
          setUser(resLoginURL.data.user.userhandler);
        }
        setResponse(resLoginURL.data.message);
      }
    } else {
      setResponse(`Invalid Data! Please Try Again!`);
    }
  } catch (error) {
    setErrorStatus(error.message);
  }
};
