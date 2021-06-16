const { Router } = require('express');
const router = Router();
const Estudiante = require('../models/Estudiante');

router.get('/', async (req, res) => {
    const estudiantes = await Estudiante.get();
    return res.json(estudiantes);
});

router.post('/', async (req, res) => {
    
    const estudiante = new Estudiante(req.body);
    estudiante.save();
    return res.json(estudiante);

});


router.get('/:id', async (req, res) => {

    const {id} = req.params;
    const estudiante = await Estudiante.get(id);
    return res.json(estudiante);
    
})





module.exports = router;