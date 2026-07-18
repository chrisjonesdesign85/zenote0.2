import { todoData } from './todoData.js' // future

// VARIABLES
const input = document.getElementById("input");
const btn = document.getElementById('btn');
const todoContainer = document.querySelector('.todo-container')

window.onload = function() {
    input.focus()
}

// local storage
let todos = JSON.parse(localStorage.getItem("theTodos")) || []

localStorage.setItem('theTodos', JSON.stringify(todos)) 
    return;

todos.push(todoItem.textContent) 
    
    const loadTodos = () => {
    
}

const renderTodo = (todo) => {
    createTodoElements();
    appendtodoItems();
    createActionItems(); 

}

const renderTodos = () => {
    // forEach
}

// popluate todos from localStorage
    todos.forEach(todo => {
        const todoItem = document.createElement('p')
        todoItem.textContent = todo;
        
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
        
        

        todoItem.addEventListener('click', () => {
            todoItem.classList.toggle('strikeOut')
            todoItem.draggable = true // future
            let dateCompleted = Date.now()
            const dateObject = new Date(dateCompleted)
            if (todoItem.className == 'strikeOut') {
                console.log(dateObject.toISOString())
            }
        });

        star.addEventListener('click', () => {
            starIcon.classList.toggle('fa-regular')
            starIcon.classList.toggle('fa-solid')
            console.log(star)
        })

        // removing items
        trash.addEventListener('click', (e) => {
            e.stopPropagation();
            newDiv.classList.add('fadeOut')
            // remove div once transition animation plays
            newDiv.addEventListener("transitionend", () => {
                let item = todoItem.textContent
                let index = todos.indexOf(item)

                if (index !== -1) { 
                    todos.splice(index, 1)
                }

                localStorage.setItem('theTodos', JSON.stringify(todos))
                console.log(todos)
                newDiv.remove()
            })    
        })
    
        todoContainer.appendChild(newDiv)
        input.value = "";
        input.focus();

    })

const getInputValue = () => {
    if (input.value.trim() === "") return;

}

const createTodoElements = (todo) => {
    const todoItem = document.createElement('p')
    todoItem.textContent = input.value;
    
    const newDiv = document.createElement('div');
    newDiv.className = 'todoDiv';

    const cal = document.createElement('span')
    cal.innerHTML = `<i class="fa-solid fa-calendar"></i>`
    cal.className = 'cal'

    const star = document.createElement('span')
    star.innerHTML='<i class="fa-regular fa-star"></i>'
    star.className='star'

    const trash = document.createElement('span')
    trash.innerHTML='<i class="fa-solid fa-trash"></i>'
    trash.className = 'trash';

    const subAddBtn = document.createElement('span')
    subAddBtn.innerHTML='<i class="fa-solid fa-plus">'
    subAddBtn.className = "subplus"
    
    newDiv.appendChild(todoItem)
    newDiv.appendChild(cal)        
    newDiv.appendChild(star)
    newDiv.appendChild(subAddBtn)
    newDiv.appendChild(trash)
    todoContainer.appendChild(newDiv)
}

const saveTodos = () => {
    
    localStorage.setItem('theTodos', JSON.stringify(todos))
}
        

const removeTodoFromArray = () => {
    if (index !== -1) {
        todos.splice(index, 1)
    }
}

const removeTodo = () => {
    newDiv.remove()
    newDiv.classList.add('fadeOut')
    // remove div once transition animation plays
    removeTodoFromArray()
   
}
const trashListener = () => {

    trash.addEventListener('click', (e) => {
        e.stopPropagation();
        // remove div once transition animation plays
        newDiv.addEventListener("transitionend", () => {
            let item = event.target.textContent
            let index = todos.indexOf(item)
     
            // clear input field
            input.value = "";
                input.focus();
            })    
        })
    }


    
        

        
        


// send todo by clicking button / pressing the enter key
btn.addEventListener('click', getInput)
input.addEventListener('keyup', (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
        btn.click();
    }
})



