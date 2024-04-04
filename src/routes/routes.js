const express = require('express');
const router = express.Router();
const agendaController = require('../controllers/agendaController');

// Rota para listar os horários
router.get('/horarios', agendaController.listarHorarios);

// Rota para listar os horários de determinada turma
router.get('/horarios/:turma', agendaController.listarHorarioDeUmaTurma)

module.exports = router;


