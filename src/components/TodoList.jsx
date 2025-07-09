import React from 'react'
import TodoItem from './TodoItem.jsx'

function TodoList({ todos, removeTodo, toggleTodo, updateTodo }) {
    return (
        <ul className="space-y-4 p-4 md:p-6 bg-gray-50 rounded-lg shadow-inner">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                    updateTodo={updateTodo}
                />
            ))}
        </ul>
    )
}

export default TodoList
