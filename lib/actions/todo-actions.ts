'use server'

import connectDB from '@/config/database'
import Todo from '@/models/Todo'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const addTodo = async (formData: FormData) => {
  await connectDB()

  const description = formData.get('description')

  const addedTodo = await Todo.create({ description })

  if (!addedTodo) throw new Error('Failed to create todo')

  redirect('/')
}

export const updateTodo = async (formData: FormData) => {
  await connectDB()

  const id = formData.get('id')

  const description = formData.get('description')

  const updatedTodo = await Todo.findByIdAndUpdate(
    { _id: id },
    { description: description },
    { new: true }
  )

  if (!updatedTodo) throw new Error('Failed to update todo')

  redirect('/')
}

export const deleteTodo = async (formData: FormData) => {
  await connectDB()

  const id = formData.get('id')

  const deletedTodo = await Todo.findByIdAndDelete(id)

  if (!deletedTodo) throw new Error('Failed to delete todo')

  revalidatePath('/')
}
