export default class Todo {
    constructor(data) {
        this.id = data._id
        this.task = data.task
        this.completed = data.completed
        this.description = data.description
    }

    get Template() {
        return /*html*/ `
        <button type="button" class="close text-danger" onclick="app.todoController.removeTodo('${this.id}')">
        <span>&times;</span>
        </button>
        <dd>${this.description}</dd>
        `
    }

}