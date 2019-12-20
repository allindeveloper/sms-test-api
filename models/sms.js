const schemas = require('../schemas');

function validateSmsCreate(sms) {
    return schemas.smsCreate.validate(sms);
}

exports.validateSmsCreate = validateSmsCreate;
