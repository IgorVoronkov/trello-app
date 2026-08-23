export interface Todo {
  id: string
  title: string
  isDone: boolean
}

export type TodoStatusFilter = 'all' | 'active' | 'completed'
