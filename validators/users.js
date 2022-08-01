const Joi = require('joi')

const validators = {

    registerValidator: Joi.object({
        firstname: Joi.string().min(2).required(),
        lastname: Joi.string().min(2).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).required(),
        cpassword: Joi.any().equal(Joi.ref('password')).required().label('Confirm password').options({ messages: { 'any.only': '{{#label}} does not match'} })
    }),

    loginValidator: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).required()
    })
}

module.exports = validators