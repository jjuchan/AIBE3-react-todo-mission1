import { useEffect, useState } from 'react'
import { getItem, setItem } from '../utils/storage'

function useTodos(initialTodos = []) {
    const [todos, setTodos] = useState(() => {
        return getItem('todos', initialTodos)
    })

    const [todoId, setTodoId] = useState(() => todos.length + 1)

    useEffect(() => {
        setItem('todos', todos)
    }, [todos])

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
