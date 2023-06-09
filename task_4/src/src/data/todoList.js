export const todoList = []
const createTodo = (title) => {
  todoList.push({
    id: todoList.length + 1,
    title,
    createdAt: new Date().toISOString(),
  })
}

createTodo("Eat pizza.");
createTodo("Surf the web.");
createTodo("Maybe work with a KSA company?")
createTodo("Drink an energy drink.")

