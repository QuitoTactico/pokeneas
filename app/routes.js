const { getHome, getListen } = require('../controllers/controller');

const setupRoutes = (app, port, s3BucketUrl) => {
    app.get('/', getHome);
    app.listen(port, getListen(port, s3BucketUrl));
};

module.exports = { setupRoutes };