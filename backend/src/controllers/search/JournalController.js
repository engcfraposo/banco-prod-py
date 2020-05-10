const Article = require('../../models/Articles');


module.exports = {

    async index(request, response){

       
        const { journal } = request.query

        const  articles = await Article.find({
            journal: {
                $in: journal
            },
        })

        return response.json(articles)

    },   
                
}