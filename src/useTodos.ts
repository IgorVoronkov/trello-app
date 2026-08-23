import { useState } from 'react'

import type { Todo } from './types'

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: crypto.randomUUID(), title: 'HTML&CSS', isDone: true },
    { id: crypto.randomUUID(), title: 'JS', isDone: true },
    { id: crypto.randomUUID(), title: 'ReactJS', isDone: false },
  ])

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      isDone: false,
    }
    setTodos((prev) => [newTodo, ...prev])
  }

  const toggleTodo = (id: string, isDone: boolean) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, isDone } : todo)))
  }

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const deleteAllTodos = () => {
    setTodos([])
  }

  return { todos, addTodo, toggleTodo, deleteTodo, deleteAllTodos }
}
