const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));
app.use(express.json());

require('./config/db.config');

const routes = require('./config/routes.config');
app.use('/', routes)


const PORT = Number(process.env.PORT || '3000');
app.listen(PORT, () => {
    console.info(`Server is running on Port ${PORT}`)
});