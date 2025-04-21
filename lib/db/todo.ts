import connectDB from '@/config/database'
import Todo from '@/models/Todo'

export const getTodos = async () => connectDB().then(() => Todo.find())
