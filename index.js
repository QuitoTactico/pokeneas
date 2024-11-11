const routes = require('./app/routes');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

routes.setupRoutes(app);