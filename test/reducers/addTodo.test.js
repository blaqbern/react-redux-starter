import test from 'tape'
import todoList from '../../src/redux/modules/todoList'
import { addTodo, resetNextId } from '../../src/redux/actions'

test('add todo to initially empty todoList', t => {
  const reducerResult = todoList([], addTodo('bedazzle something'))
  t.ok(
    Array.isArray(reducerResult),
    'The todoList reducer should return an array'
  )

  t.deepEqual(
    todoList([], addTodo('bedazzle something')), [
      {
        text: 'bedazzle something',
        completed: false,
        id: 1,
      }
    ],
    'The new todo should be the only item in the list',
  )

  t.end()
})

test('add todo to initially non-empty todoList', t => {
  const initialState = [
    {
      text: 'bedazzle something',
      completed: false,
      id: 88,
    },
  ]

  t.deepEqual(
    todoList(initialState, addTodo('write some bleak poetry')), [
      {
        text: 'bedazzle something',
        completed: false,
        id: 88,
      },
      {
        text: 'write some bleak poetry',
        completed: false,
        id: 2,
      },
    ],
    'There should be more than one todo in the list and the new todo should be the last one',
  )

  t.end()
})

test('adding a todo with an empty string does not throw', t => {
  t.doesNotThrow(
    () => todoList([], addTodo('')),
    'An empty string for todo text is allowed'
  )

  t.end()
})
