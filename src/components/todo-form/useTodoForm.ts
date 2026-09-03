import { useState } from 'react'
import type { ChangeEvent, SubmitEvent } from 'react'

import { getTodoTitleError } from './getTodoTitleError'

export function useTodoForm(onAdd: (title: string) => void) {
  const [title, setTitle] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setTitle(value)

    if (error) {
      setError(getTodoTitleError(value))
    }
  }

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validationError = getTodoTitleError(title)

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
