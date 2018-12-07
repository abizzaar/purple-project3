import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://10.0.0.206:4000"
});

export default client;
