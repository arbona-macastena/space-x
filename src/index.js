import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";
import "./index.css";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        ships: offsetLimitPagination(),
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://coding-challenge-a8s934ksd.eu-central-1.elasticbeanstalk.com/graphql",
  cache,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App client={client} />
  </ApolloProvider>
);

reportWebVitals();
