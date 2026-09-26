import { useReducer } from 'react'

import { filterTodos } from '@/filterTodos'
import { initialTodos, initialTodoLists } from '@/mock-data'
import type { Todo, TodoListWithTodos, TodoStatusFilter } from '@/types'

import { todoListsActions } from './actions'
import { rootReducer } from './reducers/root-reducer'
import type { TodoListsState } from './types'

const initialState: TodoListsState = {
  todoLists: initialTodoLists,
  todos: initialTodos,
}

export function useTodoLists() {
  const [state, dispatch] = useReducer(rootReducer, initialState)
  const { todoLists, todos } = state

  const todoListsView: TodoListWithTodos[] = todoLists.map((list) => ({
    ...list,
    todos: filterTodos(todos[list.id]!, list.filter),
  }))

  function addList(title: string) {
    dispatch(todoListsActions.addList(title))
  }

  function deleteList(listId: string) {
    dispatch(todoListsActions.deleteList(listId))
  }

  function editListTitle(listId: string, title: string) {
    dispatch(todoListsActions.editListTitle(listId, title))
  }

  function setListFilter(listId: string, filter: TodoStatusFilter) {
    dispatch(todoListsActions.setListFilter(listId, filter))
  }

  function addTodo(listId: string, title: string) {
    dispatch(todoListsActions.addTodo(listId, title))
  }

  function updateTodo(
    listId: string,
    todoId: string,
    changes: Partial<Pick<Todo, 'title' | 'isDone'>>,
  ) {
    dispatch(todoListsActions.updateTodo(listId, todoId, changes))
  }

  function deleteTodo(listId: string, todoId: string) {
    dispatch(todoListsActions.deleteTodo(listId, todoId))
  }

  function deleteAllTodos(listId: string) {
    dispatch(todoListsActions.deleteAllTodos(listId))
  }

  return {
    todoLists: todoListsView,
    addList,
    deleteList,
    editListTitle,
    setListFilter,
    addTodo,
    updateTodo,
    deleteTodo,
    deleteAllTodos,
  }
}
