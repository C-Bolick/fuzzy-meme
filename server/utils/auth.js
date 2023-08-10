const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    next();
  }
}
module.exports = withAuth;

module.exports = {
  authMiddleware: function ({ req }) {
    



  },


  
  signToken: function ({ email, username, _id }) {
   



  },
};
