require('dotenv').config();
const { setupRoutes } = require('./routes');
const express = require('express');

const app = express();
const s3BucketUrl = process.env.S3_BUCKET_IMAGES_URL;
const port = process.env.PORT;

setupRoutes(app, port, s3BucketUrl);