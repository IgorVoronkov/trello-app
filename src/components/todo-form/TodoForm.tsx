import clsx from 'clsx'

import styles from './TodoForm.module.css'
import { useTodoForm } from './useTodoForm'

interface TodoFormProps {
  onAdd: (title: string) => void
}

export function TodoForm({ onAdd }: TodoFormProps) {
  const { title, error, handleChange, handleSubmit } = useTodoForm(onAdd)

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={handleChange}
        className={clsx(error && styles.inputError)}
      />
      <button type="submit">Add</button>
      <p className={styles.errorText}>{error}</p>
    </form>
  )
}
