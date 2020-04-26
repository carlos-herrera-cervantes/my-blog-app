const routes = app => {
  /** @region_snippet_routeIndex */
  app.get('/', (request, response) => response.render('index.hbs'));

  /** @region_snippet_routeProfile */
  app.get('/profile', (request, response) => response.render('profile.hbs'));

  /** @region_snippet_routeNotFound */
  app.get('*', (request, response) => response.render('404.hbs'));
};

module.exports = routes;
