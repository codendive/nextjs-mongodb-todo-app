import { getTodos } from '@/lib/db/todo'
import { Todo } from '@/types'

const TodoList = async () => {
  const todos: Todo[] = await getTodos()

  return (
    <div className='space-y-3'>
      {todos?.map((todo) => (
        <div
          key={todo._id}
          className='p-6 border shadow-lg bg-white/20 backdrop-blur-md rounded-xl border-white/10'
        >
          <h2 className='text-lg text-white'>{todo.description}</h2>
          <p className='text-sm'>
            {todo.completed ? '✅ Done' : '🕓 Not Done'}
          </p>
        </div>
      ))}
    </div>
  )
}

export default TodoList
