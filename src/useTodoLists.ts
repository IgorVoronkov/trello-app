import { useState } from 'react'

import { filterTodos } from './filterTodos'
import { initialTodos, initialTodoLists } from './mock-data'
import type { Todo, TodoList, TodoListWithTodos, TodoStatusFilter } from './types'

type TodosByListId = Record<TodoList['id'], Todo[]>

export function useTodoLists() {
  const [todoLists, setTodoLists] = useState<TodoList[]>(initialTodoLists)
  const [todos, setTodos] = useState<TodosByListId>(initialTodos)

  const todoListsView: TodoListWithTodos[] = todoLists.map((list) => ({
    ...list,
    todos: filterTodos(todos[list.id]!, list.filter),
  }))

  function addList(title: string) {
    const newList: TodoList = {
      id: crypto.randomUUID(),
      title,
      filter: 'all',
    }
    setTodoLists([newList, ...todoLists])
    setTodos({ ...todos, [newList.id]: [] })
  }

  function deleteList(listId: string) {
    setTodoLists(todoLists.filter((list) => list.id !== listId))
    const { [listId]: _, ...restTodos } = todos
    setTodos(restTodos)
  }

  function setListFilter(listId: string, filter: TodoStatusFilter) {
    setTodoLists(todoLists.map((list) => (list.id === listId ? { ...list, filter } : list)))
  }

  function addTodo(listId: string, title: string) {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      isDone: false,
    }
    setTodos({ ...todos, [listId]: [newTodo, ...todos[listId]!] })
  }

  function toggleTodo(listId: string, todoId: string, isDone: boolean) {
    setTodos({
      ...todos,
      [listId]: todos[listId]!.map((todo) => (todo.id === todoId ? { ...todo, isDone } : todo)),
    })
  }

  function deleteTodo(listId: string, todoId: string) {
    setTodos({
      ...todos,
      [listId]: todos[listId]!.filter((todo) => todo.id !== todoId),
    })
  }

  function deleteAllTodos(listId: string) {
    setTodos({ ...todos, [listId]: [] })
  }

  return {
    todoLists: todoListsView,
    addList,
    deleteList,
    setListFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteAllTodos,
  }
}
