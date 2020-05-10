const Article = require('../models/Articles');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

    async index(request, response){

        const articles = await Article.find();
        return response.json(articles)
        
    },

    
    async store(request, response){
     
        const user = request.headers.user_id;
        const user_id = user.toString();

        const {

            author,
            university,
            title, 
            subtitle, 
            journal,
            edition, 
            version,
            year,
            country,
            city,
            issn,
            doi,
            abstract,
            keywords,
            link,
        
        } = request.body;
        
        const keywordsArray = parseStringAsArray(keywords);
        const authorArray = parseStringAsArray(author);
        const universityArray = parseStringAsArray(university);

        article = await Article.create ({
 
            user_id,
            author: authorArray,
            university: universityArray,
            title, 
            subtitle,
            journal, 
            edition, 
            version,
            year,
            country,
            city,
            issn,
            doi,
            abstract,
            keywords: keywordsArray,
            link,
        
        })
        

    return response.json(article);
    }    
                
}