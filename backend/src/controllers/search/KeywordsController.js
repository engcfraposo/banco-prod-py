const Article = require('../../models/Articles');
const Banner = require('../../models/Banners');
const Book = require('../../models/Books');
const Monograpy = require('../../models/Monograpys');

module.exports = {

    async index(request, response){


        const { keywords } = request.query

        const  articles = await Article.find({
            keywords: {
                $in: keywords
            },
        })

        const  banners = await Banner.find({
            keywords: {
                $in: keywords
            },
        })

        const  books = await Book.find({
            keywords: {
                $in: keywords
            },
        })

        const  monograpys = await Monograpy.find({
            keywords: {
                $in: keywords
            },
        })

        return response.json([articles, banners, books, monograpys])

    },   
                
}