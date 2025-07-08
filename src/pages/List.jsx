import TodoList from '../components/TodoList'
import useTodos from '../hooks/useTodos'

export default function List() {
    const { todos, removeTodo, toggleTodo } = useTodos()

    return <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
}
