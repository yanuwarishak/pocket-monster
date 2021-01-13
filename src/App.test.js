import { render, screen } from "@testing-library/react";
import App from "./App";
import { ApolloProvider } from "react-apollo";
import client from "./graphql/graphql-config";
import { BrowserRouter } from "react-router-dom";
// import { MockedProvider } from "@apollo/react-testing";

test("it renders", () => {
  render(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  );
  // const linkElement = screen.getByText(/Pokedex/i);
  // expect(linkElement).toBeInTheDocument();
});
