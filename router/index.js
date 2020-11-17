// Set up router and fail routes
var router = require('find-my-way')({
  defaultRoute: (request, response) => {
    response.writeHead(404);
    response.end('URL Not Found.')
    return;
  },
  onBadUrl: (path, request, response) => {
    response.writeHead(400);
    response.end('Bad Request.')
    return;
  }
});

// Serve Client
require('./serve')(router);

module.exports = function(request, response) {
  console.log('hmm');

  router.lookup(request, response);
}