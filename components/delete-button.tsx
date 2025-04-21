import { deleteTodo } from '@/lib/actions/todo-actions'
import { TrashIcon } from '@heroicons/react/24/outline'

const DeleteButton = ({ id }: { id: string }) => {
  return (
    <form action={deleteTodo}>
      <input type='hidden' name='id' value={id} />
      <button className='cursor-pointer hover:text-white'>
        <TrashIcon className='w-6 h-6' />
      </button>
    </form>
  )
}

export default DeleteButton
