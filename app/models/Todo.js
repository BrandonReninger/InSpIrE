export default class Todo {
    constructor(data) {
        this.task = data.task
        this.completed = data.completed
        this.id = data.task_id
        this.description = data.description
    }

    get Template() {
        return /*html*/ `
        <div class="col-3 border border-dark rounded shadow ml-3">
        <h3 class="text-center">Todo</h3>
        <h5># to do</h5>
        <form onsubmit="app.listController.addToDo(event, '${this.id}')">
          <div class="input-group mb-3">
          <label for="taskName"></label>
  <input type="text" class="form-control" placeholder="Enter new task here..." name="taskName">
  <div class="input-group-append">
    <button class="btn btn-sm bg-primary text-white" type="submit" id="button-addon2">+</button>
  </div>
</div>
        </form>
        <dl>
        ${this.task}
        </dl>
      </div>

        `
    }

}