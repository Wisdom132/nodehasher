let crypto = require("crypto");
// logger 
let logger = func => {
  console.log(func)
}
//generate salt
exports.generateSalt = rounds => {
  if (rounds == null) {
    rounds = 12
  } else if (typeof rounds !== "number") {
    throw new Error('Round Param must be a number');
  }
  return crypto.randomBytes(Math.ceil(rounds / 2)).toString('hex').slice(0, rounds)
}

// hasher function
let hasher = (password, salt) => {
  let hash = crypto.createHmac('sha512', salt);
  hash.update(password)
  let value = hash.digest('hex')
  return {
    salt: salt,
    hashedpassword: value
  }
}

//method to return hash and salt
exports.hash = (password, salt) => {
  if (password == null || salt == null) {
    throw new Error('Must Provide Password and salt values');
  }
  if (typeof password !== 'string' || (typeof salt !== 'string' && typeof salt !== 'number')) {
    throw new Error('password must be a string and salt must either be a salt string or a number of rounds');
  }
  return hasher(password, salt)
}

exports.compare = (data, hash) => {
  if (data == null || hash == null) {
    throw new Error('data and hash arguments required');
  }
  if (typeof data !== 'string' || typeof hash !== 'string') {
    throw new Error('data and hash must be strings');
  }

}