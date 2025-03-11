const express = require('express');
const routes = express.Router();
const moongose = require('mongoose');
const createError = require('http-errors');
const users = require('../controllers/user.controller');

routes.post('/users', users.create);
routes.get('/users', users.list);
// TODO diferenciate the admins routes to modified users and
// the members routes to manage himself
routes.get('/users/:id', users.detail);
routes.delete('/users/:id', users.delete);
routes.patch('/users/:id', users.update);

routes.use((req, res, next) => {
    next(createError(404, 'Not Found'));
});

routes.use((err, req, res, next) => {
    console.log('err --> ', err);
    if (err instanceof moongose.Error.CastError
        && err.message.includes('_id')) err = createError(400, 'Resource not found');
    else if (err instanceof moongose.Error.ValidationError) err = createError(400, err);
    else if (err.message?.includes('E11000')) err = createError(
        409,
        `${Object.keys(err.keyValue)[0]} already exist`
    );
    else if (!err.status) err = createError(500, err.message);
    const data = {};
    data.message = err.message;
    if (err.errors) {
        data.errors = Object.keys(err.errors).reduce((errors, key) => {
            errors[key] = err.errors[key].message;
            return errors;
        }, {});
    }
    res.status(err.status).json(data);
});

module.exports = routes;