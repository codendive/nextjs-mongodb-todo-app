import { getTodos } from '@/lib/db/todo'
import { Todo } from '@/types'

import TodoItem from './todo-item'

const TodoList = async () => {
  const todos: Todo[] = await getTodos()

  return (
    <div className='space-y-3'>
      {todos?.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
