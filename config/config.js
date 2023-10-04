const mongoose = require('mongoose');
const dbUri = `mongodb+srv://userslearn065:Yc5DXNvuxd3HsnLI@learnusers.xmztbvp.mongodb.net/books`
const dbConnection = async () => {


    try {
        await mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Base de datos online")

    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
        throw new Error('Error al conectar con la base de datos');
    }
}


module.exports = dbConnection;