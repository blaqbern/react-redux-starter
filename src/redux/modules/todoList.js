import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_COMPLETED,
} from '../actions/types'
import todo from './todo'

export default function todoList(state = [], action) {
  const {
    type,
    payload,
  } = action
  switch (type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action),
      ]

    case TOGGLE_COMPLETED:
      return state.map(t => t.id === payload.id ? todo(t, action) : t)

    case REMOVE_TODO:
      return state.filter(t => t.id !== payload.id)

    default:
      return state
  }
}
