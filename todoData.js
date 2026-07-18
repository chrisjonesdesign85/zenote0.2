export const todoData = {
    "todo1": {
        "id": 0,
        "title": "Takeout trash",
        copleted: false
    },
    "todo2": {
        "id": 1,
        "title": "Work on coding project",
        "complete": false
    }

};

// Function to add unique ID to JSON object
const addUniqueId = (todoData) => {
    let index = 0;
    for (let key in todoData) {
        todoData[key].id = index++;
    }
    return todoData;
}

// const resultObject = addUniqueId(todoData);
// console.log(resultObject)
