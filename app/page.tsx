import TodoList from '@/components/TodoList'
// #F0D9B1
const HomePage = async () => {
  return (
    <div className='container p-6 mx-auto'>
      <h1 className='mb-4 text-3xl font-bold text-center'>📋 My Todos</h1>

      <TodoList />
    </div>
  )
}

export default HomePage
