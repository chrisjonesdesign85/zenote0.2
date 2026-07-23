// import { todoData } from './todoData.js' // future

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const todoContainer = document.querySelector(".todo-container");

let todos = JSON.parse(localStorage.getItem("theTodos")) || [];

window.onload = function () {
  input.focus();
  renderTodos();
};

const focusAndClearInput = () => {
  input.value = "";
  input.focus();
};

const getInputValue = () => {
  let txt = input.value;
  return txt;
};

const renderTodos = () => {
  todoContainer.innerHTML = "";
  todos.forEach((todo) => {
    renderTodo(todo);
  });
};

//update UI helper

const saveTodos = () => {
  localStorage.setItem("theTodos", JSON.stringify(todos));
  return;
};

const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
};

const createIcon = (styleClass, iconClass, ClassName) => {
  let span = document.createElement("span");
  span.innerHTML = `<i class= "${styleClass} ${iconClass} ${ClassName} "></i>`;
  return span;
};

const createTodoElement = (todo) => {
  const todoItem = document.createElement("p");
  todoItem.textContent = todo.text;

  if (todo.completed) {
    todoItem.classList.add("strikeOut");
  }

  const newDiv = document.createElement("div");
  newDiv.className = "todoDiv";

  const cal = createIcon("fa-solid", "fa-calendar", "cal");
  const star = createIcon("fa-regular", "fa-star", "star");
  const pencil = createIcon("fa-solid", "fa-pencil", "pencil");
  const trash = createIcon("fa-solid", "fa-trash", "trash");
  const subAddBtn = createIcon("fa-solid", "fa-plus", "subplus");

  // const cal = document.createElement('span');
  // const star = document.createElement('span');
  // const pencil = document.createElement('span');
  // const trash = document.createElement('span');
  // const subAddBtn = document.createElement('span');

  // cal.innerHTML = '<i class="fa-solid fa-calendar"></i>';
  // star.innerHTML = '<i class="fa-regular fa-star"></i>'
  // pencil.innerHTML = '<i class="fa-solid fa-pencil"></i>'
  // trash.innerHTML = '<i class="fa-solid fa-trash"></i>'
  // subAddBtn.innerHTML = '<i class="fa-solid fa-plus">'

  // cal.className = 'cal'
  // pencil.className = 'pencil'
  // star.className='star', 'fa-regular';
  // subAddBtn.className = "subplus"
  // trash.className = 'trash';

  // strike out todo item
  const toggleCompleted = () => {
    if (todoItem.isContentEditable) return;

    todo.completed = !todo.completed;

    let dateCompleted = Date.now(); // future
    const dateObject = new Date(dateCompleted); // future
    if (todoItem.classList.contains("strikeOut")) {
      console.log(dateObject.toISOString());
    }
    saveTodos();
    renderTodos();
  };

  // edit todo item
  const editTodo = () => {
    todoItem.contentEditable = true;
    todoItem.focus();
  };

  todoItem.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;

    event.preventDefault();

    // todo.text = todoItem.textContent;
    todoItem.contentEditable = false;

    // saveTodos();
    // renderTodos();
  });

  todoItem.addEventListener("blur", () => {
    todo.text = todoItem.textContent;
    saveTodos();
    renderTodos();
  });

  const starIcon = star.querySelector("i");

  const toggleStar = () => {
    todo.starred = !todo.starred;
    saveTodos();
    renderTodos();
  };

  if (todo.starred) {
    starIcon.classList.add("fa-solid");
    starIcon.style.opacity = 1;
  }

  // strike out - evenetListener
  todoItem.addEventListener("click", toggleCompleted);
  pencil.addEventListener("click", editTodo);
  star.addEventListener("click", toggleStar);
  // cal.addEventListener("click", openCalendar);

  // removing items
  trash.addEventListener("click", (e) => {
    e.stopPropagation();

    // remove div once transition animation plays
    newDiv.addEventListener(
      "transitionend",
      (e) => {
        if (e.propertyName !== "opacity") return;

        deleteTodo(todo.id);
        saveTodos();
        renderTodos();
      },
      { once: true },
    );

    newDiv.classList.add("fadeOut");
  });

  newDiv.appendChild(todoItem);
  newDiv.appendChild(pencil);
  newDiv.appendChild(cal);
  newDiv.appendChild(star);
  newDiv.appendChild(subAddBtn);
  newDiv.appendChild(trash);
  return newDiv;
}; //end createElement

const renderTodo = (todo) => {
  const element = createTodoElement(todo);
  todoContainer.appendChild(element);
};

const createTodo = (text) => ({
  id: Date.now(),
  text,
  completed: false,
  starred: false,
});

const addTodo = (text) => {
  if (text.trim() === "") return;

  const newTodo = createTodo(text);

  todos.push(newTodo);

  saveTodos();
  renderTodos();
  focusAndClearInput();
};

// button eventListener to add Todo
btn.addEventListener("click", () => {
  addTodo(getInputValue());
});

// send todo by clicking button / pressing the enter key
input.addEventListener("keyup", (event) => {
  event.preventDefault();
  if (event.keyCode === 13) {
    btn.click();
  }
});
