// import { todoData } from './todoData.js' // future

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const todoContainer = document.querySelector(".todo-container");

// State

let todos = JSON.parse(localStorage.getItem("theTodos")) || [];

// Startup

window.onload = function () {
  input.focus();
  renderTodos();
};

// Helpers

const focusAndClearInput = () => {
  input.value = "";
  input.focus();
};



const getInputValue = () => input.value;


const saveTodos = () => { // Save Todos to state
  localStorage.setItem("theTodos", JSON.stringify(todos));
};


const updateUI = () => { // update UI helper
  saveTodos();
  renderTodos();
};

// Todo State

const createTodo = (text) => ({
  id: crypto.randomUUID(),
  text,
  completed: false,
  starred: false,
});


const addTodo = (text) => {
  if (text.trim() === "") return;

  const newTodo = createTodo(text);

  todos.push(newTodo);

  updateUI();
  focusAndClearInput();
};


const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
};




// Rendering

const createIcon = (styleClass, iconClass, className) => {
  const span = document.createElement("span")
  span.className = className;

  span.innerHTML = `<i class= "${styleClass} ${iconClass}"></i>`;
  
  return span;
};


const createTodoElement = (todo) => {
  const todoItem = document.createElement("p");
  todoItem.textContent = todo.text;

  if (todo.completed) {
    todoItem.classList.add("strikeOut");
  }

  const todoDiv = document.createElement("div");
  todoDiv.className = "todoDiv";

  const cal = createIcon("fa-solid", "fa-calendar", "cal");
  const star = createIcon(todo.starred ? "fa-solid" : "fa-regular", "fa-star", "star");
  const pencil = createIcon("fa-solid", "fa-pencil", "pencil");
  const trash = createIcon("fa-solid", "fa-trash", "trash");
  const subAddBtn = createIcon("fa-solid", "fa-plus", "subplus");

  todoDiv.append(
    todoItem,
    pencil,
    cal,
    star,
    subAddBtn,
    trash
  );

  return {
    element: todoDiv,
    todoItem,
    pencil, 
    star,
    trash,
    cal,
    subAddBtn
  }
} // end create Todo Elemnets


const attachTodoEvents = (todo, elements) => {
    const {
        todoItem,
        pencil,
        star,
        trash,
        element
    } = elements;



    const toggleCompleted = () => {
        if (todoItem.isContentEditable) return;

        todo.completed = !todo.completed;
        updateUI();
    }


    const startEditing = () => {
        todoItem.contentEditable = true;
        todoItem.focus();
    };

    const finishEditing = () => {
        todo.text = todoItem.textContent.trim();
        todoItem.contentEditable = false;
        updateUI();
    };

    todoItem.addEventListener("click", toggleCompleted);

    pencil.addEventListener("click", startEditing);

    todoItem.addEventListener("blur", finishEditing);

    todoItem.addEventListener("keydown", (e) => {
        if (e.key !== "Enter") return;

        e.preventDefault();
        todoItem.blur();
    })

    star.addEventListener("click", () => {
        todo.starred = !todo.starred;
        updateUI();
    })

    trash.addEventListener("click", (e) => {
        e.stopPropagation();

        element.addEventListener("transitionend", (e) => {
            if (e.propertyName !== "opacity") return;

            deleteTodo(todo.id);
            updateUI();

        }, { once: true });

        element.classList.add("fadeOut");
    });

};



const renderTodo = (todo) => {
    const elements = createTodoElement(todo);

    attachTodoEvents(todo, elements);

    todoContainer.appendChild(elements.element);
};


const renderTodos = () => {
  todoContainer.innerHTML = "";
  todos.forEach((todo) => {
    renderTodo(todo);
  });
};




// Event Listenrs

// button eventListener to add Todo
btn.addEventListener("click", () => {
  addTodo(getInputValue());
});

// send todo by clicking button / pressing the enter key
input.addEventListener("keyup", (event) => {
  event.preventDefault();
  if (event.key === "Enter") {
    btn.click();
  }
});
