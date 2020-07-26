const {
    generateSalt,
    hash,
    compare
} = require('./index');

let salt = generateSalt(10);

let test = hash('wisdom', salt);
console.log(test)

let comparepasword = compare('wisdom');
console.log({
    comparepasword: comparepasword
})