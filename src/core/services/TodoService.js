import TodoRepository from "../ports/TodoRepository";

class TodoService {
  constructor(repository) {
    if (typeof repository === "undefined") {
      throw new Error("Repository is undefined");
    }

    this.repository = repository;
  }

  getAllTodo() {
    return this.repository.getAllTodo();
  }

  getTodo(id) {
    return this.repository.getTodo(id);
  }

  setTodo(todo) {
    this.repository.setTodo(todo);
  }

  removeTodo(id) {
    this.repository.removeTodo();
  }

  removeAllTodo() {
    this.repository.removeAllTodo();
  }
}
