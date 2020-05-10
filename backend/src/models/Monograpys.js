const mongoose = require('mongoose');

const MonograpySchema = new mongoose.Schema({

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


    titulation:{
        type: String,
        required: true,
    },

    course: {
        type: String,
        required: true,
    },

    supervisor: {
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

    doi: String,

    abstract: String,   

    keywords: [String],

    link: String,

});

module.exports = mongoose.model('Monograpy', MonograpySchema)