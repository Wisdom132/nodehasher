const hasher = require('./hasher');
let salt = hasher.generateSalt(10);
let test = hasher.hash('wisdom', salt);
console.log(test)

let compare = hasher.compare('wisdom');
console.log({
    compare: compare
})