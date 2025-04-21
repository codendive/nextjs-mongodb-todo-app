import Link from 'next/link'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import TodoList from '@/components/todo-list'

const HomePage = () => {
  return (
    <>
      <div className='flex items-center justify-between mb-8'>
        <h1 className='text-3xl font-bold text-white'>📋 My Todos</h1>
        <button className='hover:text-white'>
          <Link href='/add-todo' className='flex items-center gap-2'>
            <PlusCircleIcon className='w-6 h-6' />
            <span className='hidden sm:inline'>Add Todo</span>
          </Link>
        </button>
      </div>
      <TodoList />
    </>
  )
}

export default HomePage
