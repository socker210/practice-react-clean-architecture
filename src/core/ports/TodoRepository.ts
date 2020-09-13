import Todo from "../entities/Todo";

export default interface TodoRepository {
  getAllTodo(): Promise<Todo[]>;
  getTodo(id: number): Promise<Todo>;
  setTodo(todo: Todo): Promise<Todo>;
  removeTodo(id: number): Promise<Todo>;
  removeAllTodo(): Promise<Todo[]>;
}
