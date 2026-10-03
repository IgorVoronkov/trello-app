import { describe, expect, it } from 'vitest'

import { deepFreeze } from '@/test/deep-freeze'
import type { TodoList } from '@/types'

import { addList, addTodo, deleteList, editListTitle, setListFilter } from '../actions'
import { listsReducer } from './lists-reducer'

function makeList(overrides: Partial<TodoList> = {}): TodoList {
  return { id: '1', title: 'Existing', filter: 'all', ...overrides }
}

describe('listsReducer', () => {
  it('adds a new list to the beginning with filter "all"', () => {
    const state = deepFreeze([makeList()])
    const action = addList('New list')

    const result = listsReducer(state, action)

    expect(result).toEqual([
      { id: action.payload.listId, title: 'New list', filter: 'all' },
      makeList(),
    ])
  })

  it('removes the matching list', () => {
    const state = deepFreeze([makeList({ id: '1' }), makeList({ id: '2' })])
    const action = deleteList('1')

    const result = listsReducer(state, action)

    expect(result).toEqual([makeList({ id: '2' })])
  })

  it('with a non-existent listId leaves the list content unchanged', () => {
    const state = deepFreeze([makeList({ id: '1' })])
    const action = deleteList('missing')

    const result = listsReducer(state, action)

    expect(result).toEqual([makeList({ id: '1' })])
  })

  it('updates only the matching list', () => {
    const state = deepFreeze([
      makeList({ id: '1', title: 'Old' }),
      makeList({ id: '2', title: 'Untouched' }),
    ])
    const action = editListTitle('1', 'New')

    const result = listsReducer(state, action)

    expect(result).toEqual([
      makeList({ id: '1', title: 'New' }),
      makeList({ id: '2', title: 'Untouched' }),
    ])
  })

  it('updates only the matching list', () => {
    const state = deepFreeze([
      makeList({ id: '1', filter: 'all' }),
      makeList({ id: '2', filter: 'all' }),
    ])
    const action = setListFilter('1', 'active')

    const result = listsReducer(state, action)

    expect(result).toEqual([
      makeList({ id: '1', filter: 'active' }),
      makeList({ id: '2', filter: 'all' }),
    ])
  })

  it('ignores actions from other slices and returns the same state reference', () => {
    const state = deepFreeze([makeList()])
    const action = addTodo('1', 'Some todo')

    const result = listsReducer(state, action)

    expect(result).toBe(state)
  })
})
