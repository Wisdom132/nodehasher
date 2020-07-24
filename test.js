const hasher = require('./hasher');
let salt = hasher.generateSalt(12);
let test = hasher.hash('wisdom', salt);

console.log(test)