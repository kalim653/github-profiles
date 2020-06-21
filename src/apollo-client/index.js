import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${token}`, // replace token by generating personal
  }, // access token from https://github.com/settings/tokens
});
