const AWS = require('aws-sdk');
const winston = require('winston');
const { S3StreamLogger } = require('s3-streamlogger');

// Configurações do AWS S3
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const s3Stream = new S3StreamLogger({
    bucket: process.env.S3_BUCKET_NAME,
    folder: 'logs',
    access_key_id: process.env.AWS_ACCESS_KEY_ID,
    secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.Stream({ stream: s3Stream }),
    ],
});

module.exports = logger;
