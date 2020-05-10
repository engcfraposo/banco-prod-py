const bcrypt = require('bcrypt')

const User = require('../models/Users');

module.exports = {

    async index(request, response){

        const users = await User.find();
        return response.json(users)
        
    },

    
    async store(request, response){
        
        const {

            name, 
            cpf, 
            email, 
            university, 
            course,
            city,
            uf,
            orcid,
            lattes,
        
        } = request.body;
        
        const password = await bcrypt.hash(request.body.password, 10)
     
        const users = await User.findOne({ cpf });

        if(users){
            return response.json(users)
        }

        user = await User.create ({
 
            name, 
            cpf, 
            email, 
            university, 
            course,
            city,
            uf,
            orcid,
            lattes,
            password,
        
        })
        

    return response.json(user);
    }    
                
}