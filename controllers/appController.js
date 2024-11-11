const { port, s3BucketUrl } = require('../config');

const getListen = () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`S3 Bucket URL: ${s3BucketUrl}`);
};

module.exports = { getListen };