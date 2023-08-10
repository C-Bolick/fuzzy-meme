const {  } = require('apollo-server-express');
const { User, Email, Password } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {

  Query: {
    users: async () => {
      return await User.find({}).populate('username').populate({
        path: 'User'
        populate: ''
      })
      
    },
  },



  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      
    },
    

  },
};

module.exports = resolvers;