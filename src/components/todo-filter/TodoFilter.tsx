import clsx from 'clsx'

import type { TodoStatusFilter } from '@/types'

import styles from './TodoFilter.module.css'

interface TodoFilterProps {
  filter: TodoStatusFilter
  onFilterChange: (filter: TodoStatusFilter) => void
}

const FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
] as const

export function TodoFilter({ filter, onFilterChange }: TodoFilterProps) {
  return (
    <div>
      {FILTERS.map(({ value, label }) => (
        <button
          key={value}
          className={clsx(filter === value && styles.active)}
          onClick={() => onFilterChange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
