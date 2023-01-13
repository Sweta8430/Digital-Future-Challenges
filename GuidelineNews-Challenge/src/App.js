import "./App.css";
import "./css/style.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import PageNotFound from "./utils/PageNotFound";
import NewsHeadlines from "./Components/Headlines/NewsHeadlines";
import HeadlineSummary from "./Components/HeadLineSummary/HeadlineSummary";

function App() {
  const [getNewsData, setGetNewsData] = useState([]);
  const [errorStatus, setErrorStatus] = useState("");

  const getData = async () => {
    try {
      const responseURL = await axios.get(process.env.REACT_APP_NEWS_DATA);
      setGetNewsData(responseURL.data.response.results);
    } catch (error) {
      console.log(error);
      setErrorStatus(error.message);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 3000);
  }, []);

  return (
    <Router>
      <main>
        {errorStatus && <p>There is an error: {errorStatus}</p>}
        {!errorStatus && getNewsData.length === 0 ? (
          <p>Please Wait News are loading...</p>
        ) : (
          <>
            <div className="App">
              <Header />
              <Routes>
                <Route
                  path="/"
                  element={<NewsHeadlines newsdata={getNewsData} />}
                />
                <Route
                  path="/:id"
                  element={<HeadlineSummary newsdata={getNewsData} />}
                />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
              <Footer />
            </div>
          </>
        )}
      </main>
    </Router>
  );
}

export default App;
