
const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');

const { obtenerUsuarios,
    actualizarUsuario,
    borrarUsuario,
    registrarUsuario,
    obtenerUsuarioPorNombre
} = require('../controllers/usuarios.controllers');
const validarToken = require('../middlewares/validarToken');

const router = Router();


router.get('/', obtenerUsuarios);

router.get('/search', obtenerUsuarioPorNombre);


router.put('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom(esRoleValido),
    validarCampos
], actualizarUsuario);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellido', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser más de 6 letras').isLength({ min: 6 }),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom(emailExiste),
    check('rol').custom(esRoleValido),
    validarCampos
], registrarUsuario);

router.delete('/:id', [
    validarToken,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
], borrarUsuario);







module.exports = router;