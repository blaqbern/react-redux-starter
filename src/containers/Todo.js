import React from 'react'
import { connect } from 'react-redux'
import { toggleCompleted, removeTodo } from '../redux/actions'
import styles from './styles/Todo'

export function Todo({
  todo,
  handleToggleTodo,
  handleRemoveTodo,
}) {
  return (
    <div className="root">
      <span
        onClick={handleToggleTodo}
        className={todo.completed ? styles.completed : ''}
      >
        {todo.text}
      </span>
      <button onClick={handleRemoveTodo}>
        ⓧ
      </button>
    </div>
  )
}
const { object, func } = React.PropTypes
Todo.propTypes = {
  todo: object,
  handleToggleTodo: func,
  handleRemoveTodo: func,
}

function mapDispatchToProps(dispatch, ownProps) {
  const { todo } = ownProps
  return {
    handleToggleTodo: () => dispatch(toggleCompleted(todo.id)),
    handleRemoveTodo: () => dispatch(removeTodo(todo.id)),
  }
}

export default connect(
  (/* state */) => ({}),
  mapDispatchToProps
)(Todo)
