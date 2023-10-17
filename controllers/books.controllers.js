const Book = require('../models/book');
const Usuario = require('../models/usuario');

const obtenerLibros = async (req, res) => {

    const { limit = 5, desde = 0 } = req.query;

    const books = await Book.find()
        .skip(Number(desde))
        .limit(Number(limit));

    const total = await Book.countDocuments();
    console.log(total)
    res.status(200).json({
        total,
        books
    });
}

const registrarLibro = async (req, res) => {

    const { titulo, sinopsis, urlFoto, urlDescarga } = req.body;

    const book = new Book({ titulo, sinopsis, urlFoto, urlDescarga  });

    
    //grabar el libro
    await book.save()

    res.status(200).json({
        book
    });
}



const borrarLibro = async(req, res) => {
const  {id} = req.params;

const book = await Book.findByIdAndDelete(id);
    res.status(200).json({
        book,
    });
}


module.exports = {
    obtenerLibros,
    registrarLibro,
    borrarLibro,
    
}