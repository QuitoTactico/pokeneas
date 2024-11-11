require('dotenv').config();
const os = require("os") 

const port = process.env.PORT;
const s3BucketUrl = process.env.S3_BUCKET_URL;
const containerId = os.hostname();

module.exports = { port, s3BucketUrl, containerId };