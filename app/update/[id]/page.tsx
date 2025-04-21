import { updateTodo } from '@/lib/actions/todo-actions'

type Params = {
  id: string
}

type SearchParams = {
  description: string
}

type Props = {
  params: Promise<Params>
  searchParams: Promise<SearchParams>
}

const UpdatePage = async ({ params, searchParams }: Props) => {
  const { id } = await params
  const { description } = await searchParams

  return (
    <form
      action={updateTodo}
      className='flex flex-col max-w-md gap-4 p-6 mx-auto border shadow-lg bg-white/10 backdrop-blur-md rounded-xl border-white/10'
    >
      <h2 className='text-2xl font-bold text-center text-white'>
        🔨 Update Todo
      </h2>
      <input
        type='text'
        name='description'
        placeholder={description}
        className='w-full px-4 py-2 text-white transition-all rounded-md bg-white/20 placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-teal-300'
      />
      <input type='hidden' name='id' value={id} />
      <button className='w-full px-4 py-2 font-semibold text-white transition-colors duration-300 bg-teal-500 rounded-md shadow-md hover:bg-teal-600'>
        Update Todo
      </button>
    </form>
  )
}

export default UpdatePage
