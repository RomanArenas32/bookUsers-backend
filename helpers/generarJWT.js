const jwt = require('jsonwebtoken')
require('dotenv').config();

const generarJWT = (uid = "")=>{

    return new Promise((resolve, reject) => {
        const payload = {uid};

        jwt.sign(payload, process.env.SECRET ,{
            expiresIn: "12h"
        }, (err, token)=>{
            if(err){
                console.log(err)
                reject('No se pudo generar el token')
            }
            else{
                resolve(token)
            }
        })
    })

}


module.exports = generarJWT;