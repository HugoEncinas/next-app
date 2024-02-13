import TodoList from '@/components/TodoList'
import db from '@/utils/db'

const getData = async () => {
  return await db.todo.findMany({})
}

const TodoPage = async () => {
  const todos = await getData()
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}
export default TodoPage
