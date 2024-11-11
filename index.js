const routes = require('./app/routes');
const express = require('express');

const app = express();

routes.setupRoutes(app);