const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: Object,
        required: true
    },

}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);