
// Função para fazer uma requisição GET para o endpoint /horarios e atualizar a tabela com os dados recebidos
fetch('http://localhost:4000/horarios')
  .then(response => response.json())
  .then(data => {
    // Função para atualizar dinamicamente a tabela com os horários filtrados
    const updateTable = (filteredData) => {
      const tableContainer = document.getElementById('table-container');
      tableContainer.innerHTML = '';

      const table = document.createElement('table');
      table.classList.add('table', 'table-bordered');

      const headerRow = document.createElement('tr');
      const headers = ['Dia da Semana', 'Hora de Início', 'Hora de Fim', 'Disciplina'];
      const headerClass = 'table-header'; 
      headers.forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        header.classList.add(headerClass); 
        headerRow.appendChild(header);
      });
      table.appendChild(headerRow);

      filteredData.forEach(item => {
        const row = document.createElement('tr');

        const diaSemanaCell = document.createElement('td');
        diaSemanaCell.textContent = item.diaSemana;
        const horaInicioCell = document.createElement('td');
        horaInicioCell.textContent = item.horaInicio;
        const horaFimCell = document.createElement('td');
        horaFimCell.textContent = item.horaFim;
        const disciplinaCell = document.createElement('td');
        disciplinaCell.textContent = item.disciplina;
        
        if (item.disciplina === 'INTERVALO' || item.disciplina === 'TUTORIA' || 
        item.disciplina === 'ALMOÇO' || item.disciplina === 'NIVELAMENTO') {
          row.classList.add('special-discipline-row');
        }

        row.appendChild(diaSemanaCell);
        row.appendChild(horaInicioCell);
        row.appendChild(horaFimCell);
        row.appendChild(disciplinaCell);

        table.appendChild(row);
      });

      tableContainer.appendChild(table);
    };

    // Selecionar elementos HTML relevantes
    const turmaSelect = document.getElementById('turma');
    const diaSemanaSelect = document.getElementById('diaSemana');

    // Função para filtrar os dados com base na turma e no dia da semana selecionados
    const filterDataByTurmaAndDiaSemana = () => {
      const selectedTurma = turmaSelect.value;
      const selectedDiaSemana = diaSemanaSelect.value;

      // Verificar se ambos turma e dia da semana foram selecionados
      if (selectedTurma && selectedDiaSemana) {
        const filteredData = data.filter(item => item.turma === selectedTurma && 
          item.diaSemana === selectedDiaSemana);

        updateTable(filteredData);
      }
    };

    // Atualizar a tabela quando a turma ou o dia da semana forem alterados
    turmaSelect.addEventListener('change', filterDataByTurmaAndDiaSemana);
    diaSemanaSelect.addEventListener('change', filterDataByTurmaAndDiaSemana);
  })
  .catch(error => console.error('Erro:', error));
