import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getPeepData,
  addPeepData,
  registerData,
  loginData,
} from "./Components/AsyncFunctions/dataHandlers.js";
import Header from "./Components/Statics/Header/Header";
import Footer from "./Components/Statics/Footer/Footer";
import ApplicationError from "./Components/Statics/ApplicationError/ApplicationError";
import HomePage from "./Components/Home/HomePage";
import AddPeeps from "./Components/Peeps/AddPeeps.jsx";
import LoginForm from "./Components/Login/LoginForm.jsx";
import SignUpForm from "./Components/SignUp/SignUpForm.jsx";

function App() {
  const [peeps, setPeeps] = useState([]);
  const [errorStatus, setErrorStatus] = useState(``);
  const [response, setResponse] = useState(``);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(``);

  const getPeepHandler = () => {
    getPeepData(setPeeps, setErrorStatus);
  };
  useEffect(() => {
    getPeepHandler();
  }, []);
  useEffect(() => {
    localStorage.setItem("user", String(user));
  }, [user]);

  const addPeepHandler = (addpeep) => {
    addPeepData(addpeep, getPeepHandler, setErrorStatus, setResponse);
  };
  const signUpDataHandler = (addsignup) => {
    registerData(addsignup, setErrorStatus, setResponse);
  };
  const loginDataHandler = (getlogin) => {
    loginData(getlogin, setErrorStatus, setResponse, setLoggedIn, setUser);
  };
  return (
    <main>
      <>
        <Header />
        {!errorStatus}
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                peepdata={peeps}
                loggedIn={loggedIn}
                response={response}
                user={user}
              />
            }
          />
          <Route
            path="/addpeep"
            element={
              loggedIn ? (
                <AddPeeps peepHandler={addPeepHandler} user={user} />
              ) : (
                <LoginForm
                  loginHandler={loginDataHandler}
                  response={response}
                />
              )
            }
          />
          <Route
            path="/login"
            element={
              <LoginForm loginHandler={loginDataHandler} response={response} />
            }
          />
          <Route
            path="/signup"
            element={
              <SignUpForm
                signupHandler={signUpDataHandler}
                response={response}
              />
            }
          />
          <Route path="*" element={<ApplicationError errorCode={404} />} />
        </Routes>

        <Footer />
      </>
    </main>
  );
}

export default App;
