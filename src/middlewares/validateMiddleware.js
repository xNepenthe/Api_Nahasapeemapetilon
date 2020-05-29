const joi = require('@hapi/joi');

const schemaParams = joi.object({
    id: joi.string().alphanum().min(4).max(20).messages({
        'string.base': 'Debe ser texto.',
        'string.alphanum': 'Solamente letras y numeros.',
        'string.empty': 'No puede quedar vacio.'
    })
})

const schemaQuery = joi.object({
    last_name: joi.string().required()
})

const schemaBody = joi.object({
    name: joi.string().alphanum().min(3).max(20).required().messages({
        'string.base': 'El campo "Name" debe ser un texto.',
        'string.alphanum': 'El campo "Name" debe tener solamente letras y numeros.',
        'string.empty': 'El campo "Name" no puede estar vacio.'
    }),
    age: joi.number().required(),
    email: joi.string().email().required(),
})

const schemaHeader = joi.object();

async function validatePost(req, res, next) { 
    try {
        await schemaBody.validateAsync(req.body);
        next();
    } catch (err) {
        next(err)
    }
}

async function validateGet(req, res, next) { 
    try {
        await schemaParams.validateAsync(req.params);
        await schemaQuery.validateAsync(req.query);
        next();
    } catch (err) {
        next(err)
    }
}

module.exports = {
    validatePost,
    validateGet
};