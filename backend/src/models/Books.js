const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({

    user_id: {
        type: String,
        required: true,
    },

    author: {
        type: [String],
        required: true,
    },

    university: {
        type: [String],
        required: true,
    },

    title: {
        type: String,
        required: true,
    },

    subtitle: String,

    edition: {
        type: Number,
        required: true,
    },


    version: {
        type: Number,
        required: true,
    },

    publication:{
        type: String,
        required: true,
    },

    year: {
        type: Number,
        required: true,
    },

    country: {
        type: String,
        required: true,
    },

    city: {
        type: String,
        required: true,
    },

    isbn: String,

    doi: String,

    abstract: String,

    keywords: [String],

    link: String,

});

module.exports = mongoose.model('Book', BookSchema)