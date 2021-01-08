import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// Importing GraphQL and Apollo depedencies
import { ApolloProvider } from "react-apollo";
import client from "./graphql/graphql-config";
import { default as data } from "./graphql/initial-data";

import "./index.css";
import App from "./App";

client.writeData({ data });

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
