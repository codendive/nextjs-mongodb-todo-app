import Link from 'next/link'
import { PencilIcon } from '@heroicons/react/24/outline'
import { Todo } from '@/types'
import DeleteButton from './delete-button'

type Props = {
  todo: Todo
}

const TodoItem = ({ todo }: Props) => {
  return (
    <div
      key={todo._id}
      className='flex items-center justify-between p-6 border shadow-lg bg-white/20 backdrop-blur-md rounded-xl border-white/10'
    >
      <div className='flex flex-col space-y-2'>
        <h2 className='text-lg text-white'>{todo.description}</h2>
        <p className='text-sm'>{todo.completed ? '✅ Done' : '🕓 Not Done'}</p>
      </div>
      <div className='flex flex-col space-y-2'>
        <DeleteButton id={todo._id.toString()} />
        <Link
          href={{
            pathname: `/edit/${todo._id}`,
            query: { description: todo.description }
          }}
        >
          <PencilIcon className='w-6 h-6' />
        </Link>
      </div>
    </div>
  )
}

export default TodoItem
