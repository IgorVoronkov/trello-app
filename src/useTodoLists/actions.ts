import type { Todo, TodoStatusFilter } from '@/types'

import type {
  AddListAction,
  DeleteListAction,
  EditListTitleAction,
  SetListFilterAction,
  AddTodoAction,
  UpdateTodoAction,
  DeleteTodoAction,
  DeleteAllTodosAction,
} from './types'

export function addList(title: string): AddListAction {
  const listId = crypto.randomUUID()
  return { type: 'ADD_LIST', payload: { listId, title } }
}

export function deleteList(listId: string): DeleteListAction {
  return { type: 'DELETE_LIST', payload: { listId } }
}

export function editListTitle(listId: string, title: string): EditListTitleAction {
  return { type: 'EDIT_LIST_TITLE', payload: { listId, title } }
}

export function setListFilter(listId: string, filter: TodoStatusFilter): SetListFilterAction {
  return { type: 'SET_LIST_FILTER', payload: { listId, filter } }
}

export function addTodo(listId: string, title: string): AddTodoAction {
  return { type: 'ADD_TODO', payload: { listId, todoId: crypto.randomUUID(), title } }
}

export function updateTodo(
  listId: string,
  todoId: string,
  changes: Partial<Pick<Todo, 'title' | 'isDone'>>,
): UpdateTodoAction {
  return { type: 'UPDATE_TODO', payload: { listId, todoId, changes } }
}

export function deleteTodo(listId: string, todoId: string): DeleteTodoAction {
  return { type: 'DELETE_TODO', payload: { listId, todoId } }
}

export function deleteAllTodos(listId: string): DeleteAllTodosAction {
  return { type: 'DELETE_ALL_TODOS', payload: { listId } }
}

export const todoListsActions = {
  addList,
  deleteList,
  editListTitle,
  setListFilter,
  addTodo,
  updateTodo,
  deleteTodo,
  deleteAllTodos,
}
