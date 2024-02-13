'use server'

import { revalidatePath } from "next/cache"
import db from "./db"

export const newTodo = async(formData) => {
  const todo = await db.todo.create({
    data: {
      content: formData.get('content')
    }
  })

  revalidatePath('/todos')
}

export const completeTodo = async(id)=>{
  const currentTodo = await db.todo.findUnique({
    where: { id },
  });

  await db.todo.update({
    where: { id },
    data: {
      completed: !currentTodo?.completed,
    }
  })

  revalidatePath('/todos')
}