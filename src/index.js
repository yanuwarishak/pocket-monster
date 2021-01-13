import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
// Importing GraphQL and Apollo depedencies
import { ApolloProvider } from "react-apollo";
import client from "./graphql/graphql-config";
import { default as data } from "./graphql/initial-data";
import * as serviceWorker from './serviceWorker';


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

serviceWorker.register();