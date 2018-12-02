const Poll = require('./models/poll');
const Option = require('./models/option');

const resolvers = {
  Poll: {
    options: (parent) => parent.optionIds.map((id) => Option.findById(id))  
  },

  Query: {
    polls: () => Poll.find(),
    poll: async(_, { pollId }) =>  {
      let poll = await Poll.findById(pollId);
      console.log(poll);
      return poll;
    },

    option: async (_, { optionId }) => {
      let option = await Option.findById(optionId);
      console.log(option);
      return option;
    }
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
      console.log(option);
      return option;
    },
    vote: (_, { optionId }) => 
      Option.findByIdAndUpdate(optionId, {
        $inc: {votes: 1}
      }, { new: true})
  }
};

module.exports = resolvers;