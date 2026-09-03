import type { TodoListWithTodos, TodoStatusFilter } from '@/types'

import { TodoFilter } from '../todo-filter/TodoFilter'
import { TodoForm } from '../todo-form/TodoForm'
import { TodoList } from '../todo-list/TodoList'
import styles from './TodoBoard.module.css'

type TodoBoardProps = {
  list: TodoListWithTodos
  onDeleteList: () => void
  onSetFilter: (filter: TodoStatusFilter) => void
  onAddTodo: (title: string) => void
  onToggleTodo: (todoId: string, isDone: boolean) => void
  onDeleteTodo: (todoId: string) => void
  onDeleteAllTodos: () => void
}

export function TodoBoard({
  list,
  onDeleteList,
  onSetFilter,
  onAddTodo,
  onToggleTodo,
  onDeleteTodo,
  onDeleteAllTodos,
}: TodoBoardProps) {
  return (
    <div>
      <div className={styles.header}>
        <h3>{list.title}</h3>
        <button onClick={onDeleteList}>❌</button>
      </div>
      <TodoForm onAdd={onAddTodo} />
      <TodoList todos={list.todos} onToggle={onToggleTodo} onDelete={onDeleteTodo} />
      <TodoFilter filter={list.filter} onFilterChange={onSetFilter} />
      <button onClick={onDeleteAllTodos}>Delete all</button>
    </div>
  )
}
