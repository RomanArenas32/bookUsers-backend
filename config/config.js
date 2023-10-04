const mongoose = require('mongoose');
require('dotenv').config();

const openUri = process.env.MONGO_CONNECT
console.log(openUri)

const dbConnection = async () => {


    try {
        await mongoose.connect(openUri, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Base de datos online")

    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
        throw new Error('Error al conectar con la base de datos');
    }
}


module.exports = dbConnection;