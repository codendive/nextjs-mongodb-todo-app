import { addTodo } from '@/lib/actions/todo-actions'

const AddTodoPage = () => {
  return (
    <div>
      <form action={addTodo} className='flex flex-col'>
        <input
          type='text'
          name='description'
          placeholder='Enter your todo...'
          className='bg-white border rounded'
        />
        <button>Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodoPage
