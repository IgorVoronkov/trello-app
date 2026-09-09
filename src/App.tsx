import { MAX_TODOLIST_TITLE_LENGTH } from '@/constants'
import { createTextValidator } from '@/utils'

import styles from './App.module.css'
import { AddItemForm } from './components/add-item-form/AddItemForm'
import { TodoBoard } from './components/todo-board/TodoBoard'
import { useTodoLists } from './useTodoLists'

import './index.css'

const validateListName = createTextValidator(MAX_TODOLIST_TITLE_LENGTH)

function App() {
  const {
    todoLists,
    addList,
    deleteList,
    setListFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteAllTodos,
  } = useTodoLists()

  return (
    <div className={styles.app}>
      <AddItemForm validate={validateListName} onAdd={addList} />
      {todoLists.map((list) => (
        <TodoBoard
          key={list.id}
          list={list}
          onDeleteList={() => deleteList(list.id)}
          onSetFilter={(filter) => setListFilter(list.id, filter)}
          onAddTodo={(title) => addTodo(list.id, title)}
          onToggleTodo={(todoId, isDone) => toggleTodo(list.id, todoId, isDone)}
          onDeleteTodo={(todoId) => deleteTodo(list.id, todoId)}
          onDeleteAllTodos={() => deleteAllTodos(list.id)}
        />
      ))}
    </div>
  )
}

export default App
