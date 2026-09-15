import { useState, type ChangeEvent } from 'react'

interface EditableSpanProps {
  value: string
  onSave: (value: string) => void
  className?: string
}

export function EditableSpan({ value, onSave, className }: EditableSpanProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [draftValue, setDraftValue] = useState(value)

  function startEditing() {
    setDraftValue(value)
    setIsEditing(true)
  }

  function save() {
    onSave(draftValue)
    setIsEditing(false)
  }

  function cancel() {
    setIsEditing(false)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      save()
    }
    if (e.key === 'Escape') {
      cancel()
    }
  }

  function changeDraftValue(e: ChangeEvent<HTMLInputElement>) {
    setDraftValue(e.target.value)
  }

  if (isEditing) {
    return (
      <input
        value={draftValue}
        onChange={changeDraftValue}
        onBlur={save}
        onKeyDown={handleKeyDown}
        // oxlint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
      />
    )
  }

  return (
    <span className={className} onDoubleClick={startEditing}>
      {value}
    </span>
  )
}
