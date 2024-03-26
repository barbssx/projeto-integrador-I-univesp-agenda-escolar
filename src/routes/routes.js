const express = require('express');
const router = express.Router();
const agendaController = require('../controllers/agendaController');

// Rota para listar os horários
router.get('/horarios', agendaController.listarHorarios);


router.get('/horarios/:turma', agendaController.listarHorarioDeUmaTurma)

module.exports = router;
