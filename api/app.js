const express = require('express')
const logger = require('morgan');
const app = express();
const { session } = require('./config/session.config');
const { checkSession } = require('./middleware/session.middleware');
const { cors } = require('./config/cors.config');

require('./config/db.config');

app.use(cors);
app.use(logger('dev'));
app.use(express.json());
app.use(session);
app.use(checkSession);

const routes = require('./config/routes.config');
app.use('/', routes)


const PORT = Number(process.env.PORT || '3000');
app.listen(PORT, () => {
    console.info(`Server is running on Port ${PORT}`)
});