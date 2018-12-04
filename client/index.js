import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://10.103.251.83:4000"
});

export default client;
