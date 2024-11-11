require('dotenv').config();

const port = process.env.PORT;
const s3BucketUrl = process.env.S3_BUCKET_URL;

module.exports = { port, s3BucketUrl };