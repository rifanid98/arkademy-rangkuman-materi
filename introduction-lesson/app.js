const identity = require('./src/identity');
const validate = require('./src/validate');

console.log(identity);
console.log(validate.validateUsername('tests'));
console.log(validate.validatePassword('aaaaaaaa'));
