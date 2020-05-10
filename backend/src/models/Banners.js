const mongoose = require('mongoose');

const BannerSchema = new mongoose.Schema({

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

    event: {
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

    abstract: String,

    keywords: [String],

    link: String,

});

module.exports = mongoose.model('Banner', BannerSchema)