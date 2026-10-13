import type { Todo, TodoList, TodoStatusFilter } from '@/types'

export type TodosByListId = Record<TodoList['id'], Todo[]>

export type TodoListsState = {
  todoLists: TodoList[]
  todos: TodosByListId
}

export type AddListAction = { type: 'ADD_LIST'; payload: { listId: string; title: string } }

export type DeleteListAction = { type: 'DELETE_LIST'; payload: { listId: string } }

export type EditListTitleAction = {
  type: 'EDIT_LIST_TITLE'
  payload: { listId: string; title: string }
}

export type SetListFilterAction = {
  type: 'SET_LIST_FILTER'
  payload: { listId: string; filter: TodoStatusFilter }
}

export type AddTodoAction = {
  type: 'ADD_TODO'
  payload: { listId: string; todoId: string; title: string }
}

export type UpdateTodoAction = {
  type: 'UPDATE_TODO'
  payload: { listId: string; todoId: string; changes: Partial<Pick<Todo, 'title' | 'isDone'>> }
}

export type DeleteTodoAction = { type: 'DELETE_TODO'; payload: { listId: string; todoId: string } }

export type DeleteAllTodosAction = { type: 'DELETE_ALL_TODOS'; payload: { listId: string } }

export type TodoListsAction =
  | AddListAction
  | DeleteListAction
  | EditListTitleAction
  | SetListFilterAction
  | AddTodoAction
  | UpdateTodoAction
  | DeleteTodoAction
  | DeleteAllTodosAction
