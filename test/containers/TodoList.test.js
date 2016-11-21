import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import ConnectedTodoList, { TodoList } from '../../src/containers/TodoList'
import Todo from '../../src/containers/Todo'

const fakeList = [
  { id: 0, text: 'do things', completed: false },
  { id: 1, text: 'do stuff', completed: true },
]
const setup = () => {
  const props = {
    todoList: fakeList,
    handleAddTodo: sinon.spy(),
  }
  const enzymeWrapper = shallow(<TodoList {...props} />)
  return { props, enzymeWrapper }
}

test('TodoList component', t => {
  const { props, enzymeWrapper } = setup()
  t.deepEqual(
    enzymeWrapper.state(),
    { inputValue: '' },
    'initialState of the TodoList component should have an `inputValue` key with a \'\' value'
  )

  t.deepEqual(
    enzymeWrapper.find('ul').childAt(0).node,
    <li key={0}><Todo todo={{ id: 0, text: 'do things', completed: false }} /></li>
  )

  t.deepEqual(
    enzymeWrapper.find('ul').childAt(1).node,
    <li key={1}><Todo todo={{ id: 1, text: 'do stuff', completed: true }} /></li>
  )

  enzymeWrapper.find('input').simulate('change', { target: { value: 'Gotcha, Sucka!' } }),
  t.deepEqual(
    enzymeWrapper.state(),
    { inputValue: 'Gotcha, Sucka!' },
    'typing in the input element should update the inputValue field of the component state'
  )

  t.notOk(
    props.handleAddTodo.called,
    'handleAddTodo prop is not called until "+ADD" button is clicked'
  )
  enzymeWrapper.find('button').simulate('click')
  t.ok(
    props.handleAddTodo.calledOnce,
    'clicking "+ADD" calls handleAddTodo prop'
  )

  t.end()
})
