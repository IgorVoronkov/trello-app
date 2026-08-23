import type { Todo } from '@/types'

import { TodoListItem } from '../todo-list-item/TodoListItem'

interface TodoListProps {
  todos: Todo[]
  onToggle: (id: string, isDone: boolean) => void
  onDelete: (id: string) => void
}

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return <p>Список пуст</p>
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoListItem todo={todo} onToggle={onToggle} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  )
}
