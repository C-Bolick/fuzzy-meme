const { AuthenticationError } = require('apollo-server-express');
const { Profile, Email, Password, User, Menu } = require('../models');
const { signToken } = require('../utils/auth');
//const { default: context } = require('react-bootstrap/esm/AccordionContext');

const resolvers = {

  Query: {
    // users: async () => {
    //   return await User.find({}).populate('userId').populate({
    //     path: 'User',
    //     populate: ''
    //   })
    // },

    // User: async () => {
    //   return User.find();
    // },
    
    // User: async(parent, {userId}) => {
    //   return Profile.findOneAndUpdate(
    //     {_id: userId},
    //   )
    // },
    me: async(parent, args, context) => {
      if(context.user) {
        const user = await User.findOne({_id: context.user._id})
        return user
      }
      throw new AuthenticationError("You must be logged in!")
    },
    menu: async ( ) => {
      const menu = await Menu.find( )
      return menu
    }
  },



  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
  
      return { token, user };  
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
    }
  };


module.exports = resolvers;