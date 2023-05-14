export const allTodos = (state) => state.todos

export const activeTodos = (state) =>
  state.todos.filter((todo) => todo.completed === false)
