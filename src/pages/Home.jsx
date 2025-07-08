import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import initialTodos from '../data/initialTodos'
import useTodos from '../hooks/useTodos'

export default function Home() {
    const { todos, addTodo, removeTodo, toggleTodo } = useTodos(initialTodos)

    return (
        <div className="container mx-auto p-4">
            {' '}
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-gray-800 tracking-tight leading-tight">
                나의 할 일 리스트
            </h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </div>
    )
}
