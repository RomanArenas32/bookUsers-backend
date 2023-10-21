const { Router } = require('express');
const { check } = require('express-validator');
const autenticarUsuario = require('../controllers/auth.controllers');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();


router.post('/login',
    check('correo', 'El correo no es válido').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos,
    autenticarUsuario);



module.exports = router;