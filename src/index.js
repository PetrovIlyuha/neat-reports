import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import Routes from "./pages/routes";
import "./index.css";
import AppHeader from "./components/AppHeader";
import CurrentUserChecker from "./components/CurrentUserChecker";
import { CurrectUserProvider } from "./contexts/currentUser";
const App = () => {
  return (
    <CurrectUserProvider>
      <CurrentUserChecker>
        <Router>
          <AppHeader />
          <Routes />
        </Router>
      </CurrentUserChecker>
    </CurrectUserProvider>
  );
};
render(<App />, document.getElementById("root"));
