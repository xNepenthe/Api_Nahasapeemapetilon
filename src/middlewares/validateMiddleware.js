const joi = require('@hapi/joi');

const schemaParams = joi.object({

})

const schemaQuery = joi.object({
    
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

async function validateRequest(req, res, next) { 
    try {
        await schemaBody.validateAsync(req.body);
        next();
    } catch (err) {
        next(err)
    }
}

module.exports = validateRequest;