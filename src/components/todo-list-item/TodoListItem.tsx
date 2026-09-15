import clsx from 'clsx'
import type { ChangeEvent } from 'react'

import type { Todo } from '@/types'

import { EditableSpan } from '../EditableSpan/EditableSpan'
import styles from './TodoListItem.module.css'

interface TodoListItemProps {
  todo: Todo
  onEditTitle: (todoId: string, title: string) => void
  onToggle: (id: string, isDone: boolean) => void
  onDelete: (id: string) => void
}

export function TodoListItem({ todo, onEditTitle, onToggle, onDelete }: TodoListItemProps) {
  const editTodoTitle = (title: string) => onEditTitle(todo.id, title)

  const toggleTodoStatus = (e: ChangeEvent<HTMLInputElement>) => onToggle(todo.id, e.target.checked)

  return (
    <>
      <input type="checkbox" checked={todo.isDone} onChange={toggleTodoStatus} />
      <EditableSpan
        value={todo.title}
        onSave={editTodoTitle}
        className={clsx(todo.isDone && styles.done)}
      />
      <button onClick={() => onDelete(todo.id)}>❌</button>
    </>
  )
}
