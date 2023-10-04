const mongoose = require('mongoose');


const dbConnection = async () => {


    try {
        await mongoose.connect(process.env.MONGO_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Base de datos online")

    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
        throw new Error('Error al conectar con la base de datos');
    }
}


module.exports = dbConnection;