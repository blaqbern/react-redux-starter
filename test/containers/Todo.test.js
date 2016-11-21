import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import { Todo } from '../../src/containers/Todo'

function setup() {
  const props = {
    todo: { id: 0, text: 'work on kermit impersonation', completed: false },
    handleRemoveTodo: sinon.spy(),
    handleToggleTodo: sinon.spy(),
  }
  const enzymeWrapper = shallow(<Todo {...props} />)
  return { props, enzymeWrapper }
}

test('Todo component', t => {
  const { props, enzymeWrapper } = setup()
  t.deepEqual(
    enzymeWrapper.find('span').node,
    <span
      onClick={props.handleToggleTodo}
      className={''}
    >
      work on kermit impersonation
    </span>,
    'Todo prop\'s text should be rendered'
  )

  enzymeWrapper.find('span').simulate('click')
  t.ok(
    props.handleToggleTodo.calledOnce,
    'Clicking a todo should call toggle todo handler prop'
  )

  enzymeWrapper.find('button').simulate('click')
  t.ok(
    props.handleRemoveTodo.calledOnce,
    'Clicking "remove" button should call remove todo handler prop'
  )

  t.end()
})
