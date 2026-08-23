import { useState } from 'react'

import type { Todo, TodoStatusFilter } from '@/types'

import { TodoFilter } from '../todo-filter/TodoFilter'
import { TodoForm } from '../todo-form/TodoForm'
import { TodoList } from '../todo-list/TodoList'
import { filterTodos } from './filterTodos'

interface TodoBoardProps {
  todos: Todo[]
  onAdd: (title: string) => void
  onToggle: (id: string, isDone: boolean) => void
  onDelete: (id: string) => void
  onDeleteAll: () => void
}

export function TodoBoard({ todos, onAdd, onToggle, onDelete, onDeleteAll }: TodoBoardProps) {
  const [filter, setFilter] = useState<TodoStatusFilter>('all')

  const filteredTodos = filterTodos(todos, filter)

  return (
    <div>
      <TodoForm onAdd={onAdd} />
      <TodoList todos={filteredTodos} onToggle={onToggle} onDelete={onDelete} />
      <TodoFilter filter={filter} onFilterChange={setFilter} />
      <button onClick={onDeleteAll}>Delete all</button>
    </div>
  )
}
