import { todoData } from './todoData.js'

// VARIBLES
const input = document.getElementById("input");
const btn = document.getElementById('btn');
const todoContainer = document.querySelector('.todo-container')

// local storage
let todos = JSON.parse(localStorage.getItem("theTodos")) || []

window.onload = function() {
    input.focus()
}

// popluate todos from localStorage
    todos.forEach(todo => {
        

    })

let renderTodo = (todoItem) => {
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
        
    newDiv.appendChild(todoItem);
    newDiv.appendChild(cal)        
    newDiv.appendChild(star)
    newDiv.appendChild(subAddBtn)
    newDiv.appendChild(trash)

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
}


const createTodoElement = (e) => {
    document.createElement(e)
}

const getInput = () => {
    if (input.value.trim() === "") return; 

    //createElements(p, div, span)
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
        const starIcon = star.querySelector('i')

        const trash = document.createElement('span')
        trash.innerHTML='<i class="fa-solid fa-trash"></i>'
        trash.className = 'trash';

        const subAddBtn = document.createElement('span')
        subAddBtn.innerHTML='<i class="fa-solid fa-plus">'
        subAddBtn.className = "subplus"
        
        
        newDiv.appendChild(todoItem);
        newDiv.appendChild(cal)        
        newDiv.appendChild(star)
        newDiv.appendChild(subAddBtn)
        newDiv.appendChild(trash)

        todoItem.addEventListener('click', () => {
            todoItem.classList.toggle('strikeOut')
            todoItem.draggable = true // future
            let dateCompleted = Date.now()
            const dateObject = new Date(dateCompleted) // make date/time a readable format
            if (todoItem.className.toggle == 'strikeOut') {
                console.log(dateObject.toISOString()) // future
            }
        });

        star.addEventListener('click', () => {
            starIcon.classList.toggle('fa-regular', 'fa-solid')
        })

        // removing items
        trash.addEventListener('click', (e) => {
            e.stopPropagation();
            newDiv.classList.add('fadeOut')
            // remove div once transition animation plays
            newDiv.addEventListener("transitionend", () => {
                let item = event.target.textContent
                let index = todos.indexOf(item)

                if (index !== -1) {
                    todos.splice(index, 1)
                }
                localStorage.setItem('theTodos', JSON.stringify(todos))
                newDiv.remove()
            })    
        })
    
        todoContainer.appendChild(newDiv)
        input.value = "";
        input.focus();

        todos.push(todoItem.textContent)
        localStorage.setItem('theTodos', JSON.stringify(todos))
        console.log(todos)
    }

// send todo by clicking button / pressing the enter key
btn.addEventListener('click', getInput)
input.addEventListener('keyup', (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
        btn.click();
    }
})



