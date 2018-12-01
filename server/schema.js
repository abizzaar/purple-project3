const typeDefs = 
  `type Poll {
    question: String!
    options: [Option!]!
  }

  type Option {
    name: String!
    votes: Float!
  }

  type Query {
    polls: [Poll!]!
  }

  type Mutation {
    addPoll(question: String!): Poll!
    addOption(name: String!, pollId: ID!): Option!
    vote(optionId: ID!): Option
  }`;

module.exports = typeDefs;