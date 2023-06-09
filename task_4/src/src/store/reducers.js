import {CREATE_TODO, DELETE_TODO, SET_TODO_LIST} from "./actionTypes";

export const mainReducer = (state, action) => {
  switch (action.type) {
    case SET_TODO_LIST:
      return {
        ...state,
        todos: action.payload,
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    case CREATE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload,
        ]
      }
    default:
      return state
  }
}