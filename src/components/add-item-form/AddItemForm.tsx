import clsx from 'clsx'

import styles from './AddItemForm.module.css'
import { useAddItemForm } from './useAddItemForm'

interface AddItemFormProps {
  validate: (value: string) => string | null
  onAdd: (value: string) => void
}

export function AddItemForm({ validate, onAdd }: AddItemFormProps) {
  const { value, error, handleChange, handleSubmit } = useAddItemForm({ validate, onAdd })

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={clsx(error && styles.inputError)}
      />
      <button type="submit">➕</button>
      <p className={styles.errorText}>{error}</p>
    </form>
  )
}
