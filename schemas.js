const Joi = require('@hapi/joi') 
const schemas = { 
  userCreate : Joi.object().keys({
      firstname: Joi.string().required(),
      lastname:Joi.string().required(),
      email:Joi.string().email().required(),
      password:Joi.string().required()
  }),
  userLogin : Joi.object().keys({
    email: Joi.string().email().required(),
    password:Joi.string().required()
})
  // define all the other schemas below 
}; 
module.exports = schemas;