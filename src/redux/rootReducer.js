import { combineReducers } from 'redux'
import todoList from './modules/todoList'
import todo from './modules/todo'

export default combineReducers({
  todoList,
  todo,
})
