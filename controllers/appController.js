const config = require('../app/config');

const getListen = () => {
    console.log(`App listening on port: ${config.port}`);
    console.log(`S3 Bucket URL: ${config.s3BucketUrl}`);
    console.log(`Base URL: ${config.baseUrl}:${config.port}`);
    console.log(`Container ID: ${config.containerId}`);
};

module.exports = { getListen };