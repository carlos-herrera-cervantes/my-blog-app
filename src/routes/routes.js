const routes = app => {
  /** @region_snippet_routeIndex */
  app.get('/', (request, response) => response.render('index.hbs'));

  /** @regions_snippet_routeNotFound */
  app.get('*', (request, response) => response.render('404.hbs'));
};

module.exports = routes;
