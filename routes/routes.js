const { Router } = require('express');
const rutaEstudiantes = require('./rutas-estudiantes');

const router = Router();

router.use('/estudiantes', rutaEstudiantes)




module.exports = router;