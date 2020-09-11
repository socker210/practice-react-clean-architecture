class Todo {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  get id() {
    return this.id;
  }

  get title() {
    return this.title;
  }

  set title(title) {
    this.title = title;
  }

  get description() {
    return this.description;
  }

  set description(description) {
    this.description = description;
  }
}

export default Todo;
