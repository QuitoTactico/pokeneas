const config = require('./config');
const appController = require('../controllers/appController');
const homeController = require('../controllers/homeController');
const pokeneasController = require('../controllers/pokeneasController');

const setupRoutes = (app) => {
    // app
    app.listen(config.port, appController.getListen);

    // home
    app.get('/', homeController.getHome);

    // pokeneas
    app.get('/all', pokeneasController.getAll);
    app.get('/info', pokeneasController.getInfo);
    app.get('/imageAndPhrase', pokeneasController.getImageAndPhrase);
};

module.exports = { setupRoutes };