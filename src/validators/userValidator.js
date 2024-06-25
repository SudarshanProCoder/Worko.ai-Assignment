const Joi = require('joi');

const validateUser = (user) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        name: Joi.string().required(),
        age: Joi.number().required(),
        city: Joi.string().required(),
        zipCode: Joi.string().required(),
    });
    return schema.validate(user);
};

const validateUserUpdate = (user) => {
    const schema = Joi.object({
        email: Joi.string().email(),
        name: Joi.string(),
        age: Joi.number(),
        city: Joi.string(),
        zipCode: Joi.string(),
    });
    return schema.validate(user);
};

module.exports = { validateUser, validateUserUpdate };
