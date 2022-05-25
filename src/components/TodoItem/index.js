import './index.css'

const TodoItem = props => {
  const {eachItem, deleteTodoFunction} = props
  const {id, title} = eachItem

  const onClickingDeleteButton = () => {
    deleteTodoFunction(id)
  }

  return (
    <li className="todo-container">
      <p className="todo-name">{title}</p>
      <button
        className="delete-button"
        type="button"
        onClick={onClickingDeleteButton}
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
