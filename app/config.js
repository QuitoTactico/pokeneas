require('dotenv').config();
const os = require("os") 

const port = process.env.PORT;
const s3BucketUrl = process.env.S3_BUCKET_URL;
const baseUrl = process.env.BASE_URL;
const containerId = os.hostname();

module.exports = { port, s3BucketUrl, baseUrl, containerId };