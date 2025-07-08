import { useState } from 'react'

function useTodos(initialTodos = []) {
    const [todoId, setTodoId] = useState(initialTodos.length + 1)
    const [todos, setTodos] = useState(initialTodos)

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

    return { todos, addTodo, removeTodo, toggleTodo }
}

export default useTodos
