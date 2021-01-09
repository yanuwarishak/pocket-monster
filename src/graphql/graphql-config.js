import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-boost";
import { default as data } from "./initial-data";

import { resolvers, typeDefs } from "./resolvers";

const httpLink = createHttpLink({
  uri: "https://graphql-pokeapi.vercel.app/api/graphql",
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs,
  resolvers,
});

client.writeData({
  data,
});

export default client;
