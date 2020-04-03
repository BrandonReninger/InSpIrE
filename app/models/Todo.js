export default class Todo {
    constructor(data) {
        this.id = data.task_id
        this.task = data.task
        this.completed = data.completed
        this.description = data.description
    }

    get Template() {
        return /*html*/ `
        <dd>${this.description}</dd>
        `
    }

}