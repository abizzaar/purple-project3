const Poll = require('./models/poll');
const Option = require('./models/option');

const resolvers = {
  Poll: {
    options: (parent) => parent.optionIds.map((id) => Option.findById(id)),
    createOption: async (parent, {optionNames}) => {
      let returnList = []
      for (let o of optionNames) {
        const option = new Option({
          name: o,
          votes: 0
        });
        await option.save();
        await Poll.findByIdAndUpdate(parent.id, {
          $push: { optionIds: option._id }
        });
        returnList.push(option)
      }
      return returnList
    }
  },

  Query: {
    polls: () => Poll.find(),
    poll: async(_, { pollId }) =>  {
      let poll = await Poll.findById(pollId);
      console.log(poll);
      return poll;
    },
    listPolls: async(_, { desc }) =>  {
    //  var q='/'+desc+'/i';
    //  console.log(q);
      let poll = await Poll.find({ description: desc});
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
    addPoll: async (_, {question, description}) => {
      const poll = new Poll({
        question,
        description,
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
