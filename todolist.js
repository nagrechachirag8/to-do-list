const todolist = [];

function renderItems() {
    let toDoListHtml = '';

    for(let i =0;i<todolist.length;i++) {
        const item = todolist[i];
        const name = item.name;
        const date = item.date;
        const time = item.time;

        const html = `
            <div class="todo-row">
                <div class="display-todo-name">
                    ${name}
                </div>

                <div class="display-todo-datetime">
                    <p class="display-todo-date"> 
                        ${date}
                    </p>
                    <p class="display-todo-time">
                        ${time}
                    </p>
                </div>
                 
                <button onclick="
                    todolist.splice(${i},1);
                    renderItems();
                " class="display-delete-btn">Delete</button>
            </div>
        `

        toDoListHtml += html;
    }
    document.querySelector('.render-todo-items').innerHTML = toDoListHtml;
}

function addItems() {
    const nameElement = document.querySelector('.input-todo-name')
    const name = nameElement.value;

    const dateElement = document.querySelector('.input-todo-date')
    let tempDate = dateElement.value;

    const date = tempDate.slice(0,10);
    const time = tempDate.slice(11,16);
    
    if(name && date) {
        todolist.push({
            name,
            date,
            time
            // or name : name, date:date, time:time
        });
        document.querySelector('.input-todo-name').value = '';
        document.querySelector('.input-todo-date').value = '';

        renderItems();
    }
    else {
        if(name) {
            alert('Please fill Todo date');
        }
        else if(date) {
            alert('Please fill Todo name');
        }
        else {
            alert('Please fill Todo name and Todo date');
        }
    }
}
