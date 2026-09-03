import clsx from 'clsx'

import type { Todo } from '@/types'

import styles from './TodoListItem.module.css'

interface TodoListItemProps {
  todo: Todo
  onToggle: (id: string, isDone: boolean) => void
  onDelete: (id: string) => void
}

export function TodoListItem({ todo, onToggle, onDelete }: TodoListItemProps) {
  return (
    <>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={(e) => onToggle(todo.id, e.target.checked)}
      />
      <span className={clsx(todo.isDone && styles.done)}>{todo.title}</span>
      <button onClick={() => onDelete(todo.id)}>❌</button>
    </>
  )
}
