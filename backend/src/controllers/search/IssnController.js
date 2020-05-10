const Article = require('../../models/Articles');


module.exports = {

    async index(request, response){

       
        const { issn } = request.query

        const  articles = await Article.find({
            issn: {
                $in: issn
            },
        })

        return response.json(articles)
        
    },   
                
}