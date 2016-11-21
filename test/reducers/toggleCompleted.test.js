import test from 'tape'
import todoList from '../../src/redux/modules/todoList'
import { toggleCompleted } from '../../src/redux/actions'

const initialState = [
  {
    text: 'finish graduate school',
    id: 455,
    completed: false,
  },
  {
    text: 'write grandma a nice note',
    id: 17,
    completed: true,
  },
]

test('toggle the completed field of a specified todo', t => {
  t.deepEqual(
    todoList(initialState, toggleCompleted(455)), [
      {
        text: 'finish graduate school',
        id: 455,
        completed: true,
      },
      {
        text: 'write grandma a nice note',
        id: 17,
        completed: true,
      },
    ],
    'Completed field of specified todo should be changed from false to true; all others unchanged'
  )

  t.deepEqual(
    todoList(initialState, toggleCompleted(17)), [
      {
        text: 'finish graduate school',
        id: 455,
        completed: false,
      },
      {
        text: 'write grandma a nice note',
        id: 17,
        completed: false,
      },
    ],
    'Completed field of specified todo should be changed from true to false; all others unchanged'
  )

  t.deepEqual(
    todoList(initialState, toggleCompleted(272)), [
      {
        text: 'finish graduate school',
        id: 455,
        completed: false,
      },
      {
        text: 'write grandma a nice note',
        id: 17,
        completed: true,
      },
    ],
    'Toggling a todo whose id does not appear in the list should have no effect'
  )


  t.end()
})
