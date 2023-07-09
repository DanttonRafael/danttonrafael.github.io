// Obtém a referência dos elementos do DOM
const calendarHeader = document.querySelector('.calendar-header');
const currentMonth = document.querySelector('#current-month');
const calendarBody = document.querySelector('.calendar-body');
const prevMonthButton = document.querySelector('#prev-month');
const nextMonthButton = document.querySelector('#next-month');

// Obtém a data atual
const today = new Date();

// Define a data inicial do calendário (abril de 2023)
let currentDate = new Date(2023, 3, 1);

// Define as datas que devem ser marcadas como botões
const markedDates = [
  new Date(2023, 3, 30),
  new Date(2023, 4, 19),
  new Date(2023, 4, 27),
  new Date(2023, 5, 7),
  new Date(2023, 5, 30),
  new Date(2023, 6, 9)
];

// Define o evento de clique no botão "Anterior"
prevMonthButton.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

// Define o evento de clique no botão "Próximo"
nextMonthButton.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

// Define a função que renderiza o calendário
function renderCalendar() {
  // Define o cabeçalho do calendário com o mês e ano correspondentes à data atual
  const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  currentMonth.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

  // Limpa o corpo do calendário
  calendarBody.innerHTML = '';

  // Obtém o primeiro dia do mês atual e o último dia do mês anterior
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfPreviousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);

  // Calcula quantos dias da semana são necessários para exibir o mês atual
  let numberOfDaysFromPreviousMonth = firstDayOfMonth.getDay();
  if (numberOfDaysFromPreviousMonth === 0) numberOfDaysFromPreviousMonth = 7;
  const numberOfDaysInCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const numberOfDaysToDisplay = numberOfDaysFromPreviousMonth + numberOfDaysInCurrentMonth - 1;

  // Exibe os dias da semana no cabeçalho do calendário
  const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  for (let i = 0; i < weekdays.length; i++) {
    const weekday = document.createElement('div');
    weekday.classList.add('calendar-weekday');
    weekday.textContent = weekdays[i];
    calendarBody.appendChild(weekday);
  }

  // Exibe os dias do calendário no corpo do calendário
  for (let day = 1; day <= numberOfDaysToDisplay; day++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day - numberOfDaysFromPreviousMonth + 1);

    const calendarDay = document.createElement('div');
    calendarDay.classList.add('calendar-day');

    // Adiciona a classe "weekend" para os dias que são fins de semana
    if ([0, 6].includes(date.getDay())) {
      calendarDay.classList.add('weekend');
    }

    // Adiciona a classe "disabled" para os dias que não pertencem ao mês atual
    if (date.getMonth() !== currentDate.getMonth()) {
      calendarDay.classList.add('disabled');
    } else {
      // Adiciona um botão aos dias que correspondem às datas especificadas
      if (markedDates.some(markedDate => date.toDateString() === markedDate.toDateString())) {
        const markedButton = document.createElement('button');
        markedButton.classList.add('marked-button');
        markedButton.textContent = date.getDate();
        calendarDay.appendChild(markedButton);
        
        // Adiciona o evento de clique nos botões
        markedButton.addEventListener('click', () => {
          handleButtonClick(date);
        });
      } else {
        calendarDay.textContent = date.getDate();
      }
    }

    calendarBody.appendChild(calendarDay);
  }
}

// Define a função que é executada quando um botão é clicado
function handleButtonClick(date) {
    // Se a data for 30/04/2023, exibe uma pagina com um video e um texto e um botao de voltar a pagina anterior.
    if (date.toDateString() === new Date(2023, 3, 30).toDateString()) {
        window.location.href = '30-05.html';
        }
    
    // Se a data for 19/05/2023, exibe uma pagina com uma e um texto e um botao de voltar a pagina anterior.
    if (date.toDateString() === new Date(2023, 4, 19).toDateString()) {
        window.location.href = '19-05.html';
        }

    // Se a data for 27/05/2023, exibe uma pagina com uma e um texto e um botao de voltar a pagina anterior.
    if (date.toDateString() === new Date(2023, 4, 27).toDateString()) {
        window.location.href = '27-05.html';
        }

    // Se a data for 07/06/2023, exibe uma pagina com uma e um texto e um botao de voltar a pagina anterior.
    if (date.toDateString() === new Date(2023, 5, 7).toDateString()) {
        window.location.href = '07-06.html';
        }
  
    // Se a data for 30/06/2023, exibe uma pagina com uma e um texto e um botao de voltar a pagina anterior.
    if (date.toDateString() === new Date(2023, 5, 30).toDateString()) {

        window.location.href = '30-06.html';
        }

    // Se a data for 09/07/2023, exibe uma pagina com uma e um texto e um botao de voltar a pagina anterior.\
    if (date.toDateString() === new Date(2023, 6, 9).toDateString()) {
        window.location.href = '09-07.html';}


}
  
// Renderiza o calendário inicial
renderCalendar();
