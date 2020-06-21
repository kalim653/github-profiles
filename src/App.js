import React from "react";
import "antd/dist/antd.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GitHubUserProfile from "./components/GitHubUserProfile";
import GithubUsersList from "./components/GithubUsersList";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./apollo-client/index";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={GithubUsersList} />
          <Route path="/user/:userName" component={GitHubUserProfile} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
