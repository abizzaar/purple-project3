import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://10.105.5.232:4000"  
});

export default client;