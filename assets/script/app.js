// Get required elements.
const form = document.getElementById('form');
const task = document.getElementById('task');
const list = document.getElementById('list');
const error = document.getElementById('error');
let i = 0;

form.addEventListener('submit', e => {
    e.preventDefault();
    // Dedect empty field.
    if(task.value === ''){
        error.classList.replace('hidden', 'flex');
        return;
    }
    error.classList.replace('flex', 'hidden');
    // Create elements
    const li = document.createElement('li');
    const button = document.createElement('button');
    // Creating <li>.
    li.innerText = task.value;
    li.className = 'list';
    li.id = `li-task${i}`;
    // Creating button.
    button.id = `task${i}`;
    button.innerHTML = '<img src="./assets/img/trash.svg" alt="Delete icon"/>';
    // Appending child.
    li.appendChild(button);
    list.appendChild(li);
    // Set index and clear input field.
    i += 1;
    task.value = '';
    // Making delete button.
    const buttons = document.querySelectorAll('li')
    for (let i = 0; i < buttons.length; i++) {
        const btn = document.getElementById(`${buttons[i].id}`.replace('li-', ''));
        console.log(btn);
        btn.addEventListener('click', () => {
            document.getElementById(`li-${btn.id}`).remove();
        });
    }
});
