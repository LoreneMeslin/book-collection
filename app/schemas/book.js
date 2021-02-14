const Joi = require('joi');

const bookSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    edition: Joi.string().required(),
    isbn: Joi.string().required(),
    numberPages: Joi.number().integer().positive().required(),
    tag: Joi.string().required(),
    note: Joi.number().integer().positive()
});

module.exports = bookSchema;