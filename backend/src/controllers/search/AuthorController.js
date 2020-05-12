const Article = require('../../models/Articles');
const Banner = require('../../models/Banners');
const Book = require('../../models/Books');
const Monograpy = require('../../models/Monograpys');


module.exports = {

    async index(request, response){

       
        const { author } = request.query

        const  articles = await Article.find({
            author: {
                $in: author
            },
        })

        const  banners = await Banner.find({
            author: {
                $in: author
            },
        })

        const  books = await Book.find({
            author: {
                $in: author
            },
        })

        const  monograpys = await Monograpy.find({
            author: {
                $in: author
            },
        })

        return response.json([[articles, banners, books, monograpys],
            [{total_articles: articles.length}, {total_banners:banners.length}, {total_books:books.length}, {total_monograpys: monograpys.length}]])

        

       
        
    },   
                
}