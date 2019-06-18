import React from "react";
import "./styles/main.scss";
import SearchContainer from "./Containers/SearchContainer";
import MainPage from "./Components/mainPage";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/search" component={SearchContainer} />
        </div>
      </Router>
    </div>
  );
}

export default App;
