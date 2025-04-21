import { TrashIcon } from '@heroicons/react/24/outline'

const DeleteButton = ({ id }: { id: string }) => {
  return (
    <form>
      <input type='hidden' name='id' value={id} />
      <button className='cursor-pointer'>
        <TrashIcon className='w-6 h-6' />
      </button>
    </form>
  )
}

export default DeleteButton
