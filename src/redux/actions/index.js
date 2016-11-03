import * as types from './types'

let nextId = 0
export function addTodo(text) {
  return {
    type: types.ADD_TODO,
    payload: {
      id: nextId++,
      text,
    },
  }
}

export function toggleCompleted(id) {
  return {
    type: types.TOGGLE_COMPLETED,
    payload: { id },
  }
}

export function removeTodo(id) {
  return {
    type: types.REMOVE_TODO,
    payload: { id },
  }
}
