import React from "react";
import ReactDOM from "react-dom";
// Importing GraphQL and Apollo depedencies
import { ApolloProvider } from "react-apollo";
import client from "./graphql/graphql-config"

import "./index.css";
import App from "./App";


ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
