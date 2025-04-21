'use server'

import connectDB from '@/config/database'
import Todo from '@/models/Todo'
import { revalidatePath } from 'next/cache'

export const deleteTodo = async (formData: FormData) => {
  const id = formData.get('id')

  await connectDB()

  const deletedTodo = await Todo.findByIdAndDelete(id)

  if (!deletedTodo) throw new Error('Failed to delete todo')

  revalidatePath('/')
}
