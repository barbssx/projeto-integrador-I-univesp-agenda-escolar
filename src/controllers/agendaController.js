const database = require('../database/connection');

class agendaController {
    listarHorarios(request, response) {
        database.select('*').from("horarios").then(data => {
            console.log(data);
            response.json(data);
        }).catch(error => {
            console.log(error);
            response.status(500).json({ error: "Erro ao buscar horários" });
        });
    }

    listarHorarioDeUmaTurma(request, response) {
        const turma = request.params.turma;

        database.select("*").table("horarios").where({ turma: turma }).then(diaSemana => {
            response.json(diaSemana)
        }).catch(error => {
            console.log(error)
        })
    }

    
    }

module.exports = new agendaController();


