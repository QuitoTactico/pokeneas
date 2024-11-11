const { getHome } = require('../controllers/homeController');
const { getListen } = require('../controllers/appController');

const setupRoutes = (app, port, s3BucketUrl) => {
    app.get('/', getHome);
    app.listen(port, getListen(port, s3BucketUrl));
};

module.exports = { setupRoutes };