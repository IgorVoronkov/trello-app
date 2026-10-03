import { describe, expect, it } from 'vitest'

import { deepFreeze } from '@/utils/deep-freeze'

import {
  addList,
  addTodo,
  deleteAllTodos,
  deleteList,
  deleteTodo,
  editListTitle,
  updateTodo,
} from '../actions'
import type { TodosByListId } from '../types'
import { todosReducer } from './todos-reducer'

describe('todosReducer', () => {
  const initialState: TodosByListId = deepFreeze({
    'list-1': [
      { id: 'todo-1', title: 'Buy milk', isDone: false },
      { id: 'todo-2', title: 'Walk the dog', isDone: true },
    ],
    'list-2': [{ id: 'todo-3', title: 'Read a book', isDone: false }],
  })

  it('creates an empty entry for a newly added list', () => {
    const action = addList('Shopping')

    const result = todosReducer(initialState, action)

    expect(result).toEqual({ ...initialState, [action.payload.listId]: [] })
  })

  it('removes the list entry entirely on DELETE_LIST', () => {
    const action = deleteList('list-1')

    const result = todosReducer(initialState, action)

    expect(result).toEqual({ 'list-2': initialState['list-2'] })
    expect(result).not.toHaveProperty('list-1')
  })

  it('adds a new todo to the front of the target list only', () => {
    const action = addTodo('list-1', 'New todo')

    const result = todosReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      'list-1': [
        { id: action.payload.todoId, title: 'New todo', isDone: false },
        ...initialState['list-1']!,
      ],
    })
  })

  it('patches only the target todo', () => {
    const action = updateTodo('list-1', 'todo-2', { isDone: false })

    const result = todosReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      'list-1': [initialState['list-1']![0], { ...initialState['list-1']![1], isDone: false }],
    })
  })

  it('removes only the target todo from the target list', () => {
    const action = deleteTodo('list-1', 'todo-1')

    const result = todosReducer(initialState, action)

    expect(result).toEqual({ ...initialState, 'list-1': [initialState['list-1']![1]] })
  })

  it('empties only the target list on DELETE_ALL_TODOS', () => {
    const action = deleteAllTodos('list-1')

    const result = todosReducer(initialState, action)

    expect(result).toEqual({ ...initialState, 'list-1': [] })
  })

  it('returns the same state on an action unrelated to todos', () => {
    const action = editListTitle('list-1', 'Renamed')

    const result = todosReducer(initialState, action)

    expect(result).toBe(initialState)
  })
})
