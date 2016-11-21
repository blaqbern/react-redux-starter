import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import AppDev from '../../src/components/App/App.dev'
import AppProd from '../../src/components/App/App.prod'
import Header from '../../src/components/Header'
import TodoList from '../../src/containers/TodoList'
import DevTools from '../../src/redux/DevTools'

const enzymeWrapperDev = shallow(<AppDev />)
const enzymeWrapperProd = shallow(<AppProd />)

test('App Component', t =>{
  t.ok(
    enzymeWrapperDev.containsAllMatchingElements([
      <Header />,
      <TodoList />,
      <DevTools />,
    ]),
    'App component should contain a Header, TodoList and DevTools components in development'
  )

  t.ok(
    enzymeWrapperProd.containsAllMatchingElements([
      <Header />,
      <TodoList />,
    ]),
    'App component should contain a Header and TodoList components in production'
  )

  t.end()
})
