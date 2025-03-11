const User = require('../models/user.model');
const createError = require('http-errors');

module.exports.list = ((req, res, next) => {
    User.find()
        .then(users => res.status(200).json(users))
        .catch(next)
});
module.exports.create = ((req, res, next) => {
    const newUser = {
        fullname: req.body.fullname,
        dni: req.body.dni,
        phone: req.body.phone,
        nickname: req.body.nickname,
        email: req.body.email,
        password: req.body.password,
        birthday: req.body.birthday,
    }
    User.create(newUser)
        .then(user => res.status(201).json(user))
        .catch(next);
});
module.exports.delete = ((req, res, next) => {
    const userId = req.params.id;
    User.findByIdAndDelete(userId)
        .then(user => {
            if (user) {
                res.status(204).send();
            }
            else {
                next(createError(404, 'Not Found'));
            }
        })
        .catch(next);
});
module.exports.update = ((req, res, next) => {
    const userId = req.params.id;

    if (Object.keys(req.body).length === 0) {
        return next(createError(400, 'Empty body'))
    }

    User.findById(userId)
        .then(user => {
            if (user) {
                const permitedBody = {
                    fullname: req.body.fullname,
                    phone: req.body.phone,
                    nickname: req.body.nickname,
                    email: req.body.email,
                    password: req.body.password,
                    birthday: req.body.birthday,
                };


                Object.keys(permitedBody).forEach(key => {
                    if (permitedBody[key] === undefined) {
                        delete permitedBody[key];
                    }
                });

                if (Object.keys(permitedBody).length > 0) {
                    Object.assign(user, permitedBody);
                    user.save()
                        .then(user => res.status(201).json(user))
                        .catch(next);
                } else {
                    next(createError(400, 'Invalid body'));
                }
            }
            else {
                next(createError(404, 'Not Found'))
            }
        })
        .catch(next);
});
module.exports.detail = ((req, res, next) => {
    const { userId } = req.params;
    User.findOne(userId)
        .then(user => {
            if (user) {
                res.status(200).json(user);
            }
            else {
                next(createError(404, 'Not Found'));
            }
        })
        .catch(next);
});