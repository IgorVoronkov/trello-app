import type { Todo } from '@/types'

import type { TodoListsAction, TodosByListId } from '../types'

export function todosReducer(state: TodosByListId, action: TodoListsAction): TodosByListId {
  const { type, payload } = action

  switch (type) {
    case 'ADD_LIST':
      return { ...state, [payload.listId]: [] }
    case 'DELETE_LIST': {
      const { [payload.listId]: _, ...rest } = state
      return rest
    }
    case 'ADD_TODO': {
      const { listId, todoId, title } = payload
      const newTodo: Todo = { id: todoId, title, isDone: false }
      return { ...state, [listId]: [newTodo, ...state[listId]!] }
    }
    case 'UPDATE_TODO': {
      const { listId, todoId, changes } = payload
      return {
        ...state,
        [listId]: state[listId]!.map((todo) =>
          todo.id === todoId ? { ...todo, ...changes } : todo,
        ),
      }
    }
    case 'DELETE_TODO': {
      const { listId, todoId } = payload
      return { ...state, [listId]: state[listId]!.filter((todo) => todo.id !== todoId) }
    }
    case 'DELETE_ALL_TODOS':
      return { ...state, [payload.listId]: [] }
    default:
      return state
  }
}
