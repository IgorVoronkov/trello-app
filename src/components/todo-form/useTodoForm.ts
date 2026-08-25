import { useState } from 'react'
import type { ChangeEvent, SubmitEvent } from 'react'

export function useTodoForm(onAdd: (title: string) => void) {
  const [title, setTitle] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setTitle(value)

    if (error) {
      setError(validateTodoTitle(value))
    }
  }

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validationError = validateTodoTitle(title)

    if (validationError) {
      setError(validationError)
      return
    }

    onAdd(title.trim())
    setTitle('')
    setError(null)
  }

  return { title, error, handleChange, handleSubmit }
}

function validateTodoTitle(title: string): string | null {
  const MAX_TITLE_LENGTH = 30
  const trimmed = title.trim()

  if (trimmed.length === 0) {
    return 'Title cannot be empty'
  }

  if (trimmed.length > MAX_TITLE_LENGTH) {
    return `Maximum ${MAX_TITLE_LENGTH} characters`
  }

  return null
}
