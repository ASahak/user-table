let Joi = require('@hapi/joi');

const {
    EMAIL_PATTERN,
    SELECT_OPTIONS,
} = require('../utils/constants');

const schema = Joi.object({
    _id: Joi.string()
        .min(2)
        .max(255),
    fname: Joi.string()
        .min(2)
        .max(255)
        .required(),
    lname: Joi.string()
        .min(2)
        .max(255)
        .required(),
    role: Joi.string()
        .valid(...Object.keys(SELECT_OPTIONS))
        .min(2)
        .max(255)
        .required(),

    email: Joi.string()
        .regex(new RegExp(EMAIL_PATTERN), 'Please write your email address in format: yourname@example.com')
        .email({
            minDomainSegments: 2
            , /*tlds: { allow: ['com', 'net'] }*/
        })
        .required(),

});

module.exports = schema;


