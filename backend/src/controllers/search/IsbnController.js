const Book = require('../../models/Books');



module.exports = {

    async index(request, response){

       
        const { isbn } = request.query

        const  books = await Book.find({
            isbn: {
                $in: isbn
            },
        })

        return response.json([books, {total_books: books.length}])

    },   
                
}