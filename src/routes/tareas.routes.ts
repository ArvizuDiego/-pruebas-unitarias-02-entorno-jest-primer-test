const { Router } = require('express');
const { crearTarea } = require('../controllers/Tareas.controller');

const router = Router();

router.post('/tareas', crearTarea);

module.exports = router;