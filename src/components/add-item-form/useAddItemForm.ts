import { useState } from 'react'
import type { ChangeEvent, SubmitEvent } from 'react'

interface UseAddItemFormParams {
  validate: (value: string) => string | null
  onAdd: (value: string) => void
}

export function useAddItemForm({ validate, onAdd }: UseAddItemFormParams) {
  const [value, setValue] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)

    if (error) {
      setError(validate(newValue))
    }
  }

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validationError = validate(value)

    if (validationError) {
      setError(validationError)
      return
    }

    onAdd(value.trim())
    setValue('')
    setError(null)
  }

  return { value, error, handleChange, handleSubmit }
}
