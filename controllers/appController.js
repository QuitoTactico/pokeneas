const config = require('../app/config');

const getListen = () => {
    console.log(`Example app listening on port: ${config.port}`);
    console.log(`In the container with ID: ${config.containerId}`);
    console.log(`S3 Bucket URL: ${config.s3BucketUrl}`);
};

module.exports = { getListen };