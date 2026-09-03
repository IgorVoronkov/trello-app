export const MAX_TODO_TITLE_LENGTH = 30

export function getTodoTitleError(title: string): string | null {
  const trimmed = title.trim()

  if (trimmed.length === 0) {
    return 'Title cannot be empty'
  }

  if (trimmed.length > MAX_TODO_TITLE_LENGTH) {
    return `Maximum ${MAX_TODO_TITLE_LENGTH} characters`
  }

  return null
}
