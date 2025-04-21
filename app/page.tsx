import TodoList from '@/components/todo-list'

const HomePage = async () => {
  return (
    <div className='max-w-6xl'>
      <h1 className='mb-4 text-3xl font-bold text-center'>📋 My Todos</h1>
      <TodoList />
    </div>
  )
}

export default HomePage
