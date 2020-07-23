'use strict';
var crypto = require('crypto');
let salt;
let passwordData;
/**
 * generates random string of characters i.e salt
 * @function
 * @param {number} length - Length of the random string.
 */
var genRandomString = function (length) {
    return crypto.randomBytes(Math.ceil(length / 2))
        .toString('hex') /** convert to hexadecimal format */
        .slice(0, length); /** return required number of characters */
};

/**
 * hash password with sha512.
 * @function
 * @param {string} password - List of required fields.
 * @param {string} salt - Data to be validated.
 */
var sha512 = function (password, salt) {
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt: salt,
        passwordHash: value
    };
};


function validate(userpassword) {
    const saltFromDb = getFromDB();
    const hashedPassFromDB = getFromDB();

    var passwordData = sha512(userpassword, saltFromDb);
    if (passwordData.passwordHash === hashedPassFromDB) {
        return true;
    }
    return false;
}


function saltHashPassword(userpassword) {
    salt = genRandomString(16); /** Gives us salt of length 16 */
    passwordData = sha512(userpassword, salt);
    console.log({
        password: userpassword
    });
    console.log({
        hash: passwordData.passwordHash
    });
    console.log({
        salt: passwordData.salt
    });
}

saltHashPassword('MYPASSWORD');
console.log(validate('MYPASSWORD'));