import {CREATE_TODO, DELETE_TODO, SET_TODO_LIST} from "./actionTypes";


export const createTodo = (data) => {
  return {
    type: CREATE_TODO,
    payload: data,
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  }
}

export const setTodoList = (list) => {
  return {
    type: SET_TODO_LIST,
    payload: list,
  }
}

const actions = {
  createTodo,
  deleteTodo,
  setTodoList,
}

export default actions;
