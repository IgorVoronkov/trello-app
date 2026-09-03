import styles from './App.module.css'
import { TodoBoard } from './components/todo-board/TodoBoard'
import { useTodoLists } from './useTodoLists'

import './index.css'

function App() {
  const { todoLists, deleteList, setListFilter, addTodo, toggleTodo, deleteTodo, deleteAllTodos } =
    useTodoLists()

  return (
    <div className={styles.app}>
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
