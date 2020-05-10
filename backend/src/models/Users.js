const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    cpf: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    university: {
        type: String,
        required: true,
    },

    course: {
        type: String,
        required: true,
    },

    city: {
        type: String,
        required: true,
    },

    uf: {
        type: String,
        required: true,
    },

    orcid: String,

    lattes: String,

});

module.exports = mongoose.model('User', UserSchema)