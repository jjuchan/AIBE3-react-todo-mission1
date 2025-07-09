import { useEffect, useState } from 'react'
import { getStorage, setStorage } from '../utils/storage'

function useTodos(initialTodos = []) {
    const [todos, setTodos] = useState(() => {
        return getStorage('todos', initialTodos)
    })

    const [todoId, setTodoId] = useState(() => todos.length + 1)

    useEffect(() => {
        setStorage('todos', todos)
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

    const updateTodo = (id, updatedFields) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, ...updatedFields } : todo)))
    }

    return { todos, addTodo, removeTodo, toggleTodo, updateTodo }
}
export default useTodos
