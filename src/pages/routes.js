import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalFeed from "./GlobalFeed";
import SingleArticle from "./SingleArticle";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={GlobalFeed} />
      <Route path="/articles/:slug" component={SingleArticle} />
    </Switch>
  );
};
