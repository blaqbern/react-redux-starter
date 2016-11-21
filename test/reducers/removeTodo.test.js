import test from 'tape'
import todoList from '../../src/redux/modules/todoList'
import { removeTodo } from '../../src/redux/actions'

const initialState = [
  {
    text: 'make a unicorn collage',
    id: 88,
    completed: true,
  },
  {
    text: 'try some variety of chocolate-covered insect',
    id: 77,
    completed: false,
  },
]

test('remove a todo from the list', t => {
  t.deepEqual(
    todoList(initialState, removeTodo(88)), [
      {
        text: 'try some variety of chocolate-covered insect',
        id: 77,
        completed: false,
      },
    ],
    'Specified todo should be removed; all others unchanged'
  )

  t.deepEqual(
    todoList(initialState, removeTodo(101)), [
      {
        text: 'make a unicorn collage',
        id: 88,
        completed: true,
      },
      {
        text: 'try some variety of chocolate-covered insect',
        id: 77,
        completed: false,
      },
    ],
    'Removing a todo whose id does not appear in the list should have no effect'
  )


  t.end()
})
