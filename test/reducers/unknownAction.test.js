import test from 'tape'
import todoList from '../../src/redux/modules/todoList'
import todo from '../../src/redux/modules/todo'

test('unknown action', t =>{
  const initialState = [
    {
      text: 'stop eating sand',
      id: 991,
      completed: true,
    },
  ]
  const fakeAction = { type: 'FAKE_ACTION' }
  t.equal(
    todoList(initialState, fakeAction),
    initialState,
    'unknown action has no effect'
  )

  t.equal(
    todo(initialState, fakeAction),
    initialState,
    'unknown action has no effect'
  )

  t.end()
})
