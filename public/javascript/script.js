fetch('http://localhost:4000/horarios')
  .then(response => response.json())
  .then(data => {
    // Função para atualizar a tabela com os horários filtrados
    const updateTable = (filteredData) => {
      // Limpar a tabela antes de adicionar os novos horários
      const tableContainer = document.getElementById('table-container');
      tableContainer.innerHTML = '';

      // Criar a tabela
      const table = document.createElement('table');
      table.classList.add('table', 'table-bordered');

      // Cabeçalho da tabela
      const headerRow = document.createElement('tr');
      const headers = ['Dia da Semana', 'Hora de Início', 'Hora de Fim', 'Disciplina'];
      headers.forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
      });
      table.appendChild(headerRow);

      // Corpo da tabela
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
        
        row.appendChild(diaSemanaCell);
        row.appendChild(horaInicioCell);
        row.appendChild(horaFimCell);
        row.appendChild(disciplinaCell);

        table.appendChild(row);
      });

      // Adicionar a tabela ao elemento com a classe "table-container"
      tableContainer.appendChild(table);
    };

    // Filtrar os horários de acordo com a turma selecionada e o dia da semana selecionado
    const turmaSelect = document.getElementById('turma');
    const diaSemanaSelect = document.getElementById('diaSemana');
    const filterDataByTurmaAndDiaSemana = () => {
      const selectedTurma = turmaSelect.value;
      const selectedDiaSemana = diaSemanaSelect.value;
      const filteredData = data.filter(item => item.turma === selectedTurma && item.diaSemana === selectedDiaSemana);
      updateTable(filteredData);
    };

    // Atualizar a tabela quando a turma ou o dia da semana forem alterados
    turmaSelect.addEventListener('change', filterDataByTurmaAndDiaSemana);
    diaSemanaSelect.addEventListener('change', filterDataByTurmaAndDiaSemana);

    // Atualizar a tabela com todos os horários inicialmente
    updateTable(data);
  })
  .catch(error => console.error('Erro:', error));
