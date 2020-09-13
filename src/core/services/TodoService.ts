import Todo from "../entities/Todo";
import TodoRepository from "../ports/TodoRepository";

export class TodoService implements TodoRepository {
  repository: TodoRepository;

  constructor(repository: TodoRepository) {
    this.repository = repository;
  }

  getAllTodo(): Promise<Todo[]> {
    return null;
  }

  getTodo(id: number): Promise<Todo> {
    return null;
  }

  setTodo(todo: Todo): Promise<Todo> {
    return null;
  }

  removeTodo(id: number): Promise<Todo> {
    return null;
  }

  removeAllTodo(): Promise<Todo[]> {
    return null;
  }
}
