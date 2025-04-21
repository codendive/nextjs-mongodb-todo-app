import { getTodos } from '@/lib/db/todo'

const HomePage = async () => {
  const todos = await getTodos()

  return <h1 className='text-2xl'> Todo App</h1>
}

export default HomePage
