import { TodoBoard } from './components/todo-board/TodoBoard'
import { useTodos } from './useTodos'

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, deleteAllTodos } = useTodos()

  return (
    <TodoBoard
      title="What To Learn"
      todos={todos}
      onAdd={addTodo}
      onToggle={toggleTodo}
      onDelete={deleteTodo}
      onDeleteAll={deleteAllTodos}
    />
  )
}

export default App
