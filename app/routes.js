const { getHome } = require('../controllers/homeController');
const { getListen } = require('../controllers/appController');
const { getInfo, getImage } = require('../controllers/pokeneasController');
const { port } = require('../config');

const setupRoutes = (app) => {
    // home
    app.get('/', getHome);

    // pokeneas
    app.get('/info', getInfo);
    app.get('/image', getImage);

    // app
    app.listen(port, getListen);
};

module.exports = { setupRoutes };