export type Todo = {
  id: string
  title: string
  isDone: boolean
}

export type TodoStatusFilter = 'all' | 'active' | 'completed'

export type TodoList = {
  id: string
  title: string
  filter: TodoStatusFilter
}

export type TodoListWithTodos = TodoList & { todos: Todo[] }
