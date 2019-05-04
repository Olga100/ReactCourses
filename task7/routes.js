const routes = require('next-routes')

module.exports = routes()
  .add('search')
  .add('index', '/', 'search')
  .add('film', '/film/:id');
