const User = require('../../models/Users');

const jwt = require('jsonwebtoken');

module.exports = async (request, response, next) => {
    

    const token = request.headers['authorization'];


    try{

        if(!token) {
            return response.status(400).json({msg:'Access token does not compiled'})
        };
        

        const {email} = await jwt.verify(token, 'Galega dos olhos azuis 2019!');

        const userEmail = await User.findOne({email})
        console.log(userEmail)

        if (email !== userEmail.email){
            return response.status(400).json({msg:'wrong access token'})
        }

        next()

    } catch (error) {
        return response.status(400).json({msg:'Access token denied'})
    }
}   