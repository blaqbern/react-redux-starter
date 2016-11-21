import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'
import Todo from './Todo'

export class TodoList extends Component {
  state = { inputValue: '' }
  updateInputValue = e => this.setState({ inputValue: e.target.value })
  handleAddClick = () => {
    this.props.handleAddTodo(this.state.inputValue)
    this.setState({ inputValue: '' })
  }
  render() {
    const { todoList } = this.props
    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={this.updateInputValue}
        />
        <button onClick={this.handleAddClick}>+ADD</button>
        <ul>
          {todoList.map(t =>
            <li key={t.id}><Todo todo={t} /></li>
          )}
        </ul>
      </div>
    )
  }
}
const { array, func } = React.PropTypes
TodoList.propTypes = {
  todoList: array,
  handleAddTodo: func,
}

function mapStateToProps(state) {
  return { todoList: state.todoList }
}

function mapDispatchToProps(dispatch) {
  return { handleAddTodo: text => dispatch(addTodo(text)) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
