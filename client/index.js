import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://10.105.23.109:4000"
});

export default client;
