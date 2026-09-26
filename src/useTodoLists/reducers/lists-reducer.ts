import type { TodoList } from '@/types'

import type { TodoListsAction } from '../types'

export function listsReducer(state: TodoList[], action: TodoListsAction): TodoList[] {
  const { type, payload } = action

  switch (type) {
    case 'ADD_LIST': {
      const { listId, title } = payload
      const newList: TodoList = { id: listId, title, filter: 'all' }
      return [newList, ...state]
    }
    case 'DELETE_LIST':
      return state.filter((list) => list.id !== payload.listId)
    case 'EDIT_LIST_TITLE':
      return state.map((list) =>
        list.id === payload.listId ? { ...list, title: payload.title } : list,
      )
    case 'SET_LIST_FILTER':
      return state.map((list) =>
        list.id === payload.listId ? { ...list, filter: payload.filter } : list,
      )
    default:
      return state
  }
}
