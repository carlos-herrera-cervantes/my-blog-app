const path = require('path');
const express = require('express');
const hbs = require('hbs');
const chalk = require('chalk');
const routes = require('./routes/routes');

const app = express();
const port = process.env.PORT || 3000;

/**
* @MIDDLEWARES
*/
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, '../views/partials'));
app.use(express.static(path.join(__dirname, '../public')));

/**
* @ROUTES
*/
routes(app);

/**
* @LISTEN
*/
app.listen(port, () => console.log(chalk.green.inverse(`The application running at ${port}`)));
