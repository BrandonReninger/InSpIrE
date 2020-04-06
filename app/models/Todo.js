export default class Todo {
    constructor(data) {
        this.id = data._id
        this.task = data.task
        this.completed = data.completed
        this.description = data.description
    }

    get completeTemplate() {
        return /*html*/ `
    <dd>
      <button type="button" class="close text-danger" onclick="app.todoController.removeTodo('${this.id}')">
      <span>&times;</span>
      </button>
      <input type="checkbox" name= "checked" checked onclick="app.todoController.toggleToDoStatus('${this.id}')" aria-label="Checkbox for following text input">${this.description}<br>
      <!--<h5 class= "bg-white shadow-sm text-center">${this.description}</h5>-->
      </dd>
        `
    }

    get incompleteTemplate() {
        return /*html*/ `
        <button type="button" class="close text-danger" onclick="app.todoController.removeTodo('${this.id}')">
      <span>&times;</span>
      </button>
      <input type="checkbox" name= "checked" onclick="app.todoController.toggleToDoStatus('${this.id}')" aria-label="Checkbox for following text input">${this.description}<br>
      <!--<h5 class= "bg-white shadow-sm text-center">${this.description}</h5>-->
      </dd>
        `
    }

}