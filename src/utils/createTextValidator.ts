export function createTextValidator(maxLength: number) {
  return (value: string): string | null => {
    const trimmed = value.trim()

    if (trimmed.length === 0) {
      return 'This field cannot be empty'
    }

    if (trimmed.length > maxLength) {
      return `Maximum ${maxLength} characters`
    }

    return null
  }
}
