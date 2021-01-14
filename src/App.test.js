import App from "./App";
import { render } from "@testing-library/react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";
import client from "./graphql/graphql-config";

test("It renders App Component", () => {
  render(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  );
});
