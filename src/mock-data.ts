import type { Todo, TodoList } from './types'

const mockListId1 = crypto.randomUUID()
const mockListId2 = crypto.randomUUID()

export const initialTodoLists: TodoList[] = [
  {
    id: mockListId1,
    title: 'What to learn',
    filter: 'all',
  },
  {
    id: mockListId2,
    title: 'What to buy',
    filter: 'all',
  },
]

export const initialTodos: Record<TodoList['id'], Todo[]> = {
  [mockListId1]: [
    { id: crypto.randomUUID(), title: 'HTML&CSS', isDone: false },
    { id: crypto.randomUUID(), title: 'JS', isDone: false },
    { id: crypto.randomUUID(), title: 'ReactJS', isDone: true },
  ],
  [mockListId2]: [
    { id: crypto.randomUUID(), title: 'milk', isDone: false },
    { id: crypto.randomUUID(), title: 'potato', isDone: true },
  ],
}
