import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalFeed from "./GlobalFeed";
import SingleArticle from "./SingleArticle";
import Authentication from "./Authentication";
import TagFeed from "./TagFeed";
import YourFeed from "./YourFeed";
import CreateArticle from "./CreateArticle";
import EditArticle from "./EditArticle";
import Settings from "./Settings";
import UserProfile from "./UserProfile";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={GlobalFeed} />
      <Route exact path="/profiles/:slug" component={UserProfile} />
      <Route exact path="/profiles/:slug/favorites" component={UserProfile} />
      <Route path="/settings" component={Settings} />
      <Route path="/tags/:slug" component={TagFeed} />
      <Route path="/articles/new" component={CreateArticle} />
      <Route path="/articles/:slug/edit" component={EditArticle} />
      <Route path="/feed" component={YourFeed} />
      <Route path="/login" component={Authentication} />
      <Route path="/register" component={Authentication} />
      <Route path="/articles/:slug" component={SingleArticle} />
    </Switch>
  );
};
