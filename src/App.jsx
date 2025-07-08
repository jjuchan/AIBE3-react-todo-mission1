import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import useTodos from './hooks/useTodos'

function App() {
    const { todos, addTodo, removeTodo, toggleTodo } = useTodos([
        { id: 1, text: '공부 하기', checked: false, deadline: '2025-07-20' },
        { id: 2, text: '잠 자기', checked: false, deadline: '2025-07-10' },
        { id: 3, text: '밥 먹기', checked: false, deadline: '2025-07-08' },
    ])

    return (
        <>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </>
    )
}

export default App
