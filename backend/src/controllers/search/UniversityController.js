const Article = require('../../models/Articles');
const Banner = require('../../models/Banners');
const Book = require('../../models/Books');
const Monograpy = require('../../models/Monograpys');

module.exports = {

    async index(request, response){

        const { university } = request.query


        const  articles = await Article.find({
            university: {
                $in: university
            },
        })

        const  banners = await Banner.find({
            university: {
                $in: university
            },
        })

        const  books = await Book.find({
            university: {
                $in: university
            },
        })

        const  monograpys = await Monograpy.find({
            university: {
                $in: university
            },
        })

        return response.json([[articles, banners, books, monograpys],
            [{total_articles: articles.length}, {total_banners:banners.length}, {total_books:books.length}, {total_monograpys: monograpys.length}]])

    },   
                
}