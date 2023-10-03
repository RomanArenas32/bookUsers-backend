const mongoose = require('mongoose');


const dbConnection = async () => {


    try {
        await mongoose.connect(process.env.MONGO_CONNECT)
        console.log("Base de datos online")

    } catch (error) {
        throw new Error('Error al conectar con la base de datos')
    }
}


module.exports = dbConnection;