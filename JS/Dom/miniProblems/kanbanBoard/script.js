const ticketsArr = [
  {
    ticketTask: 'This is task 1 (lightgreen)',
    ticketColor: 'lightgreen',
    ticketID: 'dGSUFjfiq',
  },
  {
    ticketTask: 'This is task 2 (black)',
    ticketColor: 'black',
    ticketID: 'ay8dQS0o1',
  },
  {
    ticketTask: 'This is task 3 (lightblue)',
    ticketColor: 'lightblue',
    ticketID: 'fOqBFgQtx',
  },
  {
    ticketTask: 'This is task 4 (lightpink)',
    ticketColor: 'lightpink',
    ticketID: 'fOqBFgQtx',
  },
];

function createTicket(ticketTask, ticketColor, ticketID) {
  const id = ticketID || shortid();
  const mainCont = document.querySelector('.main-cont');
  const ticketCont = document.createElement('div');
  ticketCont.setAttribute('class', 'ticket-cont');

  ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}"></div>
         <div class="ticket-id">#${id}</div>
         <div class="task-area">${ticketTask}</div>
         <div class="ticket-lock">
           <i class="fa-solid fa-lock"></i>
         </div>
        `;

  mainCont.append(ticketCont);

  if (!ticketID) {
    ticketsArr.push({ ticketTask, ticketColor, ticketID: id });
    localStorage.setItem('tickets', JSON.stringify(ticketsArr));
  }
}

const isToolBoxColor = (e) => e.target.classList[1] === 'color';

function removeAllTickets() {
  const allTickets = document.querySelectorAll('.ticket-cont');
  allTickets.forEach((ticket) => {
    ticket.remove();
  });
}

function createAllTickets(ticketsArr) {
  ticketsArr.forEach(({ ticketTask, ticketColor, ticketID }) => {
    createTicket(ticketTask, ticketColor, ticketID);
  });
}

function handleToolBoxColor(e) {
  if (!isToolBoxColor(e)) return;

  const selectedColor = e.target.classList[0];
  const filteredTickets = ticketsArr.filter(
    ({ ticketColor }) => ticketColor === selectedColor
  );

  removeAllTickets();
  createAllTickets(filteredTickets);
}

function handleToolBoxDblClick(e) {
  if (!isToolBoxColor(e)) return;

  removeAllTickets();
  createAllTickets(ticketsArr);
}

const toolBox = document.querySelector('.toolbox-priority-cont');
createAllTickets(ticketsArr);
toolBox.addEventListener('click', handleToolBoxColor);
toolBox.addEventListener('dblclick', handleToolBoxDblClick);
