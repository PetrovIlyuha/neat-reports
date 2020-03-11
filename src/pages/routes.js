import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalFeed from "./GlobalFeed";
import SingleArticle from "./SingleArticle";
import Authentication from "./Authentication";
import TagFeed from "./TagFeed";
import YourFeed from "./YourFeed";
import CreateArticle from "./CreateArticle";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={GlobalFeed} />
      <Route path="/tags/:slug" component={TagFeed} />
      <Route path="/articles/new" component={CreateArticle} />
      <Route path="/feed" component={YourFeed} />
      <Route path="/login" component={Authentication} />
      <Route path="/register" component={Authentication} />
      <Route path="/articles/:slug" component={SingleArticle} />
    </Switch>
  );
};
