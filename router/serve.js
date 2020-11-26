var fs = require('fs');
var path = require('path');

module.exports = function(router) {

  // Main page.
  router.get('/', (request, response, params) => {
    serveFile(response, '../public/index.html');
    return;
  });

  // Favicon icon
  router.get('/favicon.ico', (request, response, params) => {
    serveFile(response, '../public/favicon.ico');
    return;
  });

  // Bundle js
  router.get('/bundle.js', (request, response, params) => {
    serveFile(response, '../public/bundle.js');
    return;
  });

  // 
  router.get('/style.css', (request, response, params) => {
    serveFile(response, '../public/style.css');
    return;
  });
}

function serveFile(response, servePath) {
  // Module for Serving Files
  var resolvedPath = path.resolve(__dirname, servePath);

  var splitPath = servePath.split('.');
  var extension = splitPath[splitPath.length-1];

  var extensionToContentType = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'text/javascript',
    'ico': 'image/x-icon'
  }

  response.writeHead(200, { 'Content-Type': extensionToContentType[extension] });
  fs.createReadStream(resolvedPath, 'utf-8').pipe(response);
}