var binary = require('node-pre-gyp');
var path = require('path');
var binding_path = binary.find(path.resolve(path.join(__dirname, './package.json')));
var binding = require(binding_path);
let crypto = require("crypto");


let generateSalt = (rounds) => {
  if (typeof rounds !== "number") {
    throw new Error('rounds must be a number');
  } else if (!rounds) {
    rounds = 12
  }

  return bindings.gen_salt_sync(minor, rounds, crypto.randomBytes(16));
  // return rounds

}


let hash = (password, salt) => {
  if (password == null || salt == null) {
    throw new Error('password and salt arguments required');
  }

  if (typeof password !== 'string' || (typeof salt !== 'string' && typeof salt !== 'number')) {
    throw new Error('password must be a string and salt must either be a salt string or a number of rounds');
  }

  if (typeof salt === 'number') {
    return salt = generateSalt(salt);
  }
}




let compare = (data, hash) => {
  if (data == null || hash == null) {
    throw new Error('data and hash arguments required');
  }
  if (typeof data !== 'string' || typeof hash !== 'string') {
    throw new Error('data and hash must be strings');
  }

// return bindings.compare_sync(data, hash);
}
