import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import SongList from "./components/SongList";
import { Router, hashHistory, Route, IndexRoute } from "react-router";
import App from "./components/App";
import SongCreate from "./components/SongCreate";
// ApolloClient - interacts with the graphQl backend. makes our request for data and then stores this data.

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path={"/"} component={App}>
          <IndexRoute component={SongList} />
          <Route path={"song/new"} component={SongCreate} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
