import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://10.105.185.123:4000"
});

export default client;
