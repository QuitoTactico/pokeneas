const getListen = (port, s3BucketUrl) => {
    console.log(`Example app listening on port ${port}`);
    console.log(`S3 Bucket URL: ${s3BucketUrl}`);
};

module.exports = { getListen };