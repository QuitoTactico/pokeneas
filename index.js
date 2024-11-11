const { setupRoutes } = require('./app/routes');
const express = require('express');

const app = express();

setupRoutes(app);