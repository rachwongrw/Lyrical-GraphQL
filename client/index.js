import React from "react";
import "./style/style.css";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import SongList from "./components/SongList";
import { Router, hashHistory, Route, IndexRoute } from "react-router";
import App from "./components/App";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";
// ApolloClient - interacts with the graphQl backend. makes our request for data and then stores this data.

const client = new ApolloClient({
  // this identifies each piece of data inside the Apollo store
  dataIdFromObject: (o) => o.id,
  // ramifications of using this: we need to return/ask for the id for every query otherwise
  // Apollo cannot identify the data
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path={"/"} component={App}>
          <IndexRoute component={SongList} />
          <Route path={"songs/new"} component={SongCreate} />
          <Route path={"songs/:id"} component={SongDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
