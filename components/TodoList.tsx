import Todo from './Todo'

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id}></Todo>
      ))}
    </div>
  )
}

export default TodoList
