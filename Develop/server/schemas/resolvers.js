const { User, Book } = require('../models');


const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
              .select('-__v -password')
              .populate('books')

          return userData;
      }

      throw new AuthenticationError('Not logged in');
  },
    books: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Book.find(params).sort({ createdAt: -1 });
    },
  }
};