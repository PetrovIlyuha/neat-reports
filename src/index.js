import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import Routes from "./pages/routes";
import "./index.css";
import AppHeader from "./components/AppHeader";

const App = () => {
  return (
    <div>
      <Router>
        <AppHeader />
        <Routes />
      </Router>
    </div>
  );
};
render(<App />, document.getElementById("root"));
