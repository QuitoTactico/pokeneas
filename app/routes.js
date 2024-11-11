const { getHome } = require('../controllers/homeController');
const { getListen } = require('../controllers/appController');
const { getAll, getInfo, getImageAndPhrase } = require('../controllers/pokeneasController');
const { port } = require('./config');

const setupRoutes = (app) => {
    // home
    app.get('/', getHome);

    // pokeneas
    app.get('/all', getAll);
    app.get('/info', getInfo);
    app.get('/imageAndPhrase', getImageAndPhrase);


    // app
    app.listen(port, getListen);
};

module.exports = { setupRoutes };