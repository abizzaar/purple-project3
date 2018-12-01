const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');

mongoose.connect('mongodb://purpleproject3:qwerty123456@ds123444.mlab.com:23444/purpleproject3', { useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const server = new GraphQLServer({ typeDefs, resolvers });
mongoose.connection.once('open', function() {
  server.start( () => console.log("server is running babbyyyy on localhost:4000"))
});