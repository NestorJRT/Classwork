const scheduleForm = document.getElementById('schedule-form');
const scheduleBody = document.querySelector('#schedule-table tbody');

function addActivity(event) {
    event.preventDefault();

    const formData = new FormData(scheduleForm);
    const dateValue = formData.get('date');
    const date = dateValue ? new Date(`${dateValue}T00:00:00`).toLocaleDateString() : '';
    const status = formData.has('free-busy') ? 'Free' : 'Busy';
    const row = document.createElement('tr');
    const values = [
        date,
        formData.get('start'),
        formData.get('end'),
        formData.get('activity'),
        formData.get('place'),
        formData.get('type'),
        formData.get('notes')
    ];

    values.forEach((value) => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
    });

    const flagCell = document.createElement('td');
    const flag = document.createElement('span');
    flag.textContent = '●';
    flag.style.color = formData.get('flag');
    flagCell.appendChild(flag);
    row.appendChild(flagCell);

    const statusCell = document.createElement('td');
    const statusIcon = document.createElement('img');
    statusIcon.src = status === 'Free' ? 'images/free.png' : 'images/busy.png';
    statusIcon.alt = status;
    statusIcon.width = 25;
    statusIcon.height = 25;
    statusCell.append(statusIcon, document.createTextNode(` ${status}`));
    row.appendChild(statusCell);

    scheduleBody.appendChild(row);
    scheduleForm.reset();
}

scheduleForm.addEventListener('submit', addActivity);
