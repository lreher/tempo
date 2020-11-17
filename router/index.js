// Set up router and fail routes
var router = require('find-my-way')({
  defaultRoute: (request, response) => {
    response.writeHead(404, headers);
    response.end('URL Not Found.')
    return;
  },
  onBadUrl: (path, request, response) => {
    response.writeHead(400, headers);
    response.end('Bad Request.')
    return;
  }
});

require('./routes/serve')(router);

module.exports = function(request, response) {
  router.lookup(request, response);
}