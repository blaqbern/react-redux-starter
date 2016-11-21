import React from 'react'
import test from 'tape'
import { mount } from 'enzyme'
import sinon from 'sinon'
import ConnectedTodoList, { TodoList } from '../../src/containers/TodoList'
import ConnectedTodo, { Todo } from '../../src/containers/Todo'
import { addTodo } from '../../src/redux/actions'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../../src/redux/rootReducer'

function setup() {
  return mount(
    <Provider store={createStore(rootReducer)}>
      <ConnectedTodoList />
    </Provider>
  )
}

test('ConnectedTodoList', t => {
  const enzymeWrapper = setup()
  const TodoListComponent = enzymeWrapper.find(ConnectedTodoList).find(TodoList)

  TodoListComponent.props().handleAddTodo('prune bonzai')
  t.deepEqual(
    enzymeWrapper.find(ConnectedTodoList).find(TodoList).props().todoList,
    [{ id: 4, text: 'prune bonzai', completed: false }],
    'value of todoList from the redux store should be passed to the TodoList component'
  )

  t.end()
})
