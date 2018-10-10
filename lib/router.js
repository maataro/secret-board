'use strict';
const postsHandler = require('./posts-handler');

function route(req, res) {
  switch (req.url) {
    case '/posts':
      postsHandler.handle(req, res);
      break;
    default:
      // res.end();
      break;
  }
}

module.exports = {
  route: route
};