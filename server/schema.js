const typeDefs =
  `type Poll {
    id: ID!
    question: String!
    description: String!
    options: [Option!]!
    createOption(optionNames: [String!]!): [Option]
  }

  type Option {
    id: ID!
    name: String!
    votes: Float!
  }

  type Query {
    polls: [Poll!]!
    poll(pollId: ID!): Poll
    option(optionId: ID!): Option
  }

  type Mutation {
    addPoll(question: String!, description: String!): Poll! 
    addOption(name: String!, pollId: ID!): Option!
    vote(optionId: ID!): Option
  }`;

module.exports = typeDefs;
