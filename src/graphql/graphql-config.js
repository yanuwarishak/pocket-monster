import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient} from "apollo-boost";

const httpLink = createHttpLink({
  uri: "https://graphql-pokeapi.vercel.app/api/graphql",
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
});

// client
//   .query({
//     query: gql`
//       {
//         pokemons(limit: 20, offset: 0) {
//           results {
//             id
//             name
//             image
//             url
//           }
//         }
//       }
//     `,
//   })
//   .then((res) => console.log(res));

export default client;
