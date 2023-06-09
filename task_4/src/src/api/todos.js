import {todoList} from "../data";

export const getTodoList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(todoList), 250);
  })
}