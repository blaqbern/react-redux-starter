import React from 'react'
import test from 'tape'
import { mount } from 'enzyme'
import sinon from 'sinon'
import ConnectedTodo, { Todo } from '../../src/containers/Todo'
import { addTodo } from '../../src/redux/actions'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../../src/redux/rootReducer'

const store = createStore(rootReducer)

function setup() {
  return mount(
    <Provider store={store}>
      <ConnectedTodo todo={{ id: 5, text: 'embelish resume', completed: false }} />
    </Provider>
  )
}

test('ConnectedTodo', t => {
  const enzymeWrapper = setup()
  store.dispatch(addTodo('embelish resume'))
  enzymeWrapper.find(ConnectedTodo).find(Todo).props().handleToggleTodo()
  t.deepEqual(
    store.getState().todoList,
    [{ id: 5, text: 'embelish resume', completed: true }]
  )

  t.end()
})
