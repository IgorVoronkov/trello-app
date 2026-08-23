import type { Todo, TodoStatusFilter } from '@/types'

export function filterTodos(todos: Todo[], filter: TodoStatusFilter): Todo[] {
  switch (filter) {
    case 'active':
      return todos.filter((todo) => !todo.isDone)
    case 'completed':
      return todos.filter((todo) => todo.isDone)
    default:
      return todos
  }
}
