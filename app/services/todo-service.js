import store from "../store.js";
import Todo from "../models/Todo.js";


// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/brandon/todos/",
  timeout: 8000
});



class TodoService {
  getTodos() {
    todoApi.get()
      .then(res => {
        console.log(res.data)
        let todos = res.data.data.map(rawData => new Todo(rawData))
        store.commit('todos', todos)
      }).catch(err => console.error(err))
  }


  addTodoAsync(newTodoObject) {
    todoApi.post("", newTodoObject)
      .then(res => {
        console.log("add todo", res.data)
        this.getTodos()
      }).catch(err => console.error(err))
  }


  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo.id == todoId)
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {
    todoApi.delete(todoId)
      .then(res => {
        console.log("bye-bye", res.data)
        let myTodo = store.State.todos.findIndex(todo => todo.id == todoId)
        store.State.todos.splice(myTodo, 1)
      })
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }
}

const todoService = new TodoService();
export default todoService;