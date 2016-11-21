import React from 'react'
import DevTools from '../../redux/DevTools'
import Header from '../Header'
import TodoList from '../../containers/TodoList'
import '../../assets/shared-styles'

export default function AppDev(/* {} */) {
  return (
    <div>
      <Header />
      <TodoList />
      <DevTools />
    </div>
  )
}
