const Monograpy = require('../models/Monograpys');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

    async index(request, response){

        const monograpys = await Monograpy.find();
        return response.json(monograpys)
        
    },

    
    async store(request, response){
     
        const user = request.headers.user_id;
        const user_id = user.toString();

        const {

            author,
            title, 
            subtitle, 
            university,
            titulation,
            course, 
            supervisor,
            year,
            country,
            city,
            doi,
            abstract,
            keywords,
            link,
        
        } = request.body;
        
        const keywordsArray = parseStringAsArray(keywords);
        const authorArray = parseStringAsArray(author);
        const universityArray = parseStringAsArray(university);

        monograpy = await Monograpy.create ({
 
            user_id,
            author: authorArray,
            university: universityArray,
            title, 
            subtitle, 
            university,
            titulation,
            course, 
            supervisor,
            year,
            country,
            city,
            doi,
            abstract,
            keywords: keywordsArray,
            link,
        
        })
        

    return response.json(monograpy);
    }    
                
}