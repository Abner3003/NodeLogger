const express = require('express');
const logger = require('./logger');

const app = express();

app.get('/', (req, res) => {
    logger.info('Root endpoint accessed');
    res.send('Hello, AWS Logs!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});
