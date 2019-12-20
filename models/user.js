const schemas = require('../schemas');

function validateUserCreate(user) {
    return schemas.userCreate.validate(user);
}
function validateUserLogin(user) {
    return schemas.userLogin.validate(user);
}
exports.validateUserCreate = validateUserCreate;
exports.validateUserLogin = validateUserLogin;