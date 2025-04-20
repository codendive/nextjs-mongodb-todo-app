import { Schema, model, models } from 'mongoose'

const TodoSchema = new Schema(
  {
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
)

const Todo = models.Todo || model('Todo', TodoSchema)

export default Todo
