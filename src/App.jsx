import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
    const [todoId, setTodoId] = useState(4)

    const [todos, setTodos] = useState([
        { id: 1, text: '공부 하기', checked: false, deadline: '2025-07-20' },
        { id: 2, text: '잠 자기', checked: false, deadline: '2025-07-10' },
        { id: 3, text: '밥 먹기', checked: false, deadline: '2025-07-08' },
    ])

    const addTodo = ({ text, deadline }) => {
        setTodos([{ id: todoId, text, checked: false, deadline }, ...todos])
        setTodoId(todoId + 1)
    }

    const removeTodo = (removeId) => {
        setTodos(todos.filter((todo) => todo.id !== removeId))
    }

    const toggleTodo = (updateId) => {
        setTodos(todos.map((todo) => (todo.id === updateId ? { ...todo, checked: !todo.checked } : todo)))
    }

    return (
        <>
            <TodoForm addTodo={addTodo} />
            <TodoList removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </>
    )
}

export default App
