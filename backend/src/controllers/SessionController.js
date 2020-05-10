
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/Users');


module.exports ={
    

    async create(request, response){

        const { email, password } = request.body;

        const userEmail  =  await User.findOne({email})

        if (!userEmail){

            return response.status(400).json({ error: 'No User found'})

        }
        
        const userPassword = await bcrypt.compare(password, userEmail.password)
        
        if(userPassword == false){

            return response.status(400).json({ error: 'Wrong password'})

        }

        const token = jwt.sign({
            email,
        }, 'Galega dos olhos azuis 2019!')
        
        

        return response.json([userEmail, token]);
    }
}