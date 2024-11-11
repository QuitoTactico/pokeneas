const { getHome } = require('./controller');

const setupRoutes = (app, port, s3BucketUrl) => {
    app.get('/', getHome);

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
        console.log(`S3 Bucket URL: ${s3BucketUrl}`);
    });
};

module.exports = { setupRoutes };