const Banner = require('../models/Banners');

const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

    async index(request, response){

        const banners = await Banner.find();
        return response.json([banners, {total_banners: banners.length}])
        
    },

    
    async store(request, response){
     
        const user = request.headers.user_id;
        const user_id = user.toString();

        const {

            author,
            university,
            title, 
            subtitle, 
            event,
            year,
            country,
            city,
            abstract,
            keywords,
            link,
        
        } = request.body;
        
        const keywordsArray = parseStringAsArray(keywords);
        const authorArray = parseStringAsArray(author);
        const universityArray = parseStringAsArray(university);

        banner = await Banner.create ({
 
            user_id,
            author: authorArray,
            university: universityArray,
            title, 
            subtitle, 
            event,
            year,
            country,
            city,
            abstract,
            keywords: keywordsArray,
            link,
        
        })
        
    return response.json(banner);
    }    
                
}