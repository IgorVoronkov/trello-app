import type { TodoListsAction, TodoListsState } from '../types'
import { listsReducer } from './lists-reducer'
import { todosReducer } from './todos-reducer'

export function rootReducer(state: TodoListsState, action: TodoListsAction): TodoListsState {
  return {
    todoLists: listsReducer(state.todoLists, action),
    todos: todosReducer(state.todos, action),
  }
}
