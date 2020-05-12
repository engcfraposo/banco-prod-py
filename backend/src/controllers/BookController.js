const Book = require('../models/Books');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

    async index(request, response){

        const books = await Book.find();
        return response.json([books, {total_books: books.length}])
        
    },

    
    async store(request, response){
     
        const user = request.headers.user_id;
        const user_id = user.toString();

        const {

            author,
            university,
            title, 
            subtitle, 
            edition, 
            version,
            publication,
            year,
            country,
            city,
            isbn,
            doi,
            abstract,
            keywords,
            link,
        
        } = request.body;
        
        const keywordsArray = parseStringAsArray(keywords);
        const authorArray = parseStringAsArray(author);
        const universityArray = parseStringAsArray(university);


        book = await Book.create ({
 
            user_id,
            author: authorArray,
            university: universityArray,
            title, 
            subtitle, 
            edition, 
            version,
            publication,
            year,
            country,
            city,
            isbn,
            doi,
            abstract,
            keywords: keywordsArray,
            link,
        
        })
        

    return response.json(book);
    }    
                
}