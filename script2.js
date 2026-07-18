// import { todoData } from './todoData.js' // future

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const todoContainer = document.querySelector('.todo-container')

let todos = JSON.parse(localStorage.getItem("theTodos")) || [];

window.onload = function() {
    input.focus();
    renderTodos();
};

const focusAndClearInput = () => {
    input.value = "";
    input.focus();
}

const getInputValue = () => {
    let txt = input.value;
    return txt;    
}

const renderTodos = () => {
    todoContainer.innerHTML = "";
    todos.forEach(todo => {
        renderTodo(todo)
    });
};

const saveTodos = () => {
    localStorage.setItem('theTodos', JSON.stringify(todos)) 
    return;
}

const deleteTodo = (id) => {
    todos = todos.filter(todo => todo.id !== id);
};

// const toggleCOmplete = (todo) = () => {

// };

// const toggleStar = () => {

// };






const createTodoElement = (todo) => {
    const todoItem = document.createElement('p')
    todoItem.textContent = todo.text;

    if (todo.completed) {
        todoItem.classList.add("strikeOut");
    }
        
    const newDiv = document.createElement('div');
    newDiv.className = 'todoDiv';

    const cal = document.createElement('span')
    cal.innerHTML = `<i class="fa-solid fa-calendar"></i>`
    cal.className = 'cal'

    const star = document.createElement('span')
    star.innerHTML='<i class="fa-regular fa-star"></i>'
    star.className='star'
    const starIcon = star.querySelector('i')

    const trash = document.createElement('span')
    trash.innerHTML='<i class="fa-solid fa-trash"></i>'
    trash.className = 'trash';

    const subAddBtn = document.createElement('span')
    subAddBtn.innerHTML='<i class="fa-solid fa-plus">'
    subAddBtn.className = "subplus"
        
    // Event Listeners
    todoItem.addEventListener('click', () => {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
        // todoItem.classList.toggle('strikeOut')
        todoItem.draggable = true // future
        let dateCompleted = Date.now() // future
        const dateObject = new Date(dateCompleted) // future
        if (todoItem.classList.contains('strikeOut')) {
            console.log(dateObject.toISOString())
        }
    });

    star.addEventListener('click', () => {
            starIcon.classList.toggle('fa-regular');
            starIcon.classList.toggle('fa-solid');
    });

    // removing items
    trash.addEventListener('click', (e) => {
        e.stopPropagation();

        // remove div once transition animation plays
        newDiv.addEventListener("transitionend", (e) => {
            if (e.propertyName !== "opacity") return;

            deleteTodo(todo.id);
            saveTodos();
            renderTodos();

        }, { once: true }); 
        
        newDiv.classList.add('fadeOut');
    }); 

    newDiv.appendChild(todoItem);
    newDiv.appendChild(cal)        
    newDiv.appendChild(star)
    newDiv.appendChild(subAddBtn)
    newDiv.appendChild(trash)
    return newDiv
} //end createElement

const renderTodo = (todo) => {
    const element = createTodoElement(todo)
    todoContainer.appendChild(element)
    
}

const createTodo = (text) => ({
        id: Date.now(),
        text,
        completed: false,
        starred: false
});


const addTodo = (text) => {
    if (text.trim() === "") return;

    const newTodo = createTodo(text);

    todos.push(newTodo);
    
    saveTodos();
    renderTodos();
    focusAndClearInput();
}

const toggleComplete = (id) => {} 

btn.addEventListener("click", () => {
    addTodo(getInputValue())
});

// send todo by clicking button / pressing the enter key
input.addEventListener('keyup', (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
        btn.click();
    }
})







