import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalFeed from "./GlobalFeed";
import SingleArticle from "./SingleArticle";
import Authentication from "./Authentication";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={GlobalFeed} />
      <Route path="/login" component={Authentication} />
      <Route path="/register" component={Authentication} />
      <Route path="/articles/:slug" component={SingleArticle} />
    </Switch>
  );
};
