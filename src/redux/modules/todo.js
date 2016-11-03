import { ADD_TODO, TOGGLE_COMPLETED } from '../actions/types'

export default function todo(state = {}, action) {
  const { type, payload } = action
  switch (type) {
    case ADD_TODO:
      return Object.assign({}, payload, { completed: false })

    case TOGGLE_COMPLETED:
      return Object.assign({}, state, {
        completed: !state.completed,
      })

    default:
      return state
  }
}
