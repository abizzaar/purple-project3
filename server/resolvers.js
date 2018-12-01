const Poll = require('./models/poll');
const Option = require('./models/option');

const resolvers = {
  Poll: {
    options: (parent) => parent.optionIds.map((id) => Option.findById(id))  
  },
  // Option: {
  // },
  Query: {
    polls: () => Poll.find()
  },
  Mutation: {
    addPoll: async (_, {question}) => {
      const poll = new Poll({
        question,
        optionIds: []
      });
      return await poll.save();
    },
    addOption: async (_, {name, pollId}) => {
      const option = new Option({
        name,
        votes: 0
      });
      await option.save();
      await Poll.findByIdAndUpdate(pollId, {
        $push: { optionIds: option._id }
      });
      return option;
    },
    vote: async (optionId) => {
      option.findByIdAndUpdate(optionId, {
        $inc: {votes: 1}
      })
    }
  }
};

module.exports = resolvers;