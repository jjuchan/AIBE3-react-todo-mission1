import React from 'react'

function TodoList({ todos, removeTodo, toggleTodo }) {
    const today = new Date().toISOString().slice(0, 10) // 오늘 날짜 (YYYY-MM-DD)

    return (
        <ul className="space-y-4 p-4 md:p-6 bg-gray-50 rounded-lg shadow-inner">
            {todos.map((todo) => {
                const isOverdue = todo.deadline && todo.deadline < today && !todo.checked // 마감일이 지났고 완료되지 않은 경우
                const isScheduled = todo.deadline && todo.deadline >= today && !todo.checked // 마감일이 오늘이거나 미래이고 완료되지 않은 경우

                return (
                    <li
                        key={todo.id}
                        className={`
                            flex items-center justify-between
                            p-4 rounded-xl shadow-md transition-all duration-300
                            ${
                                todo.checked
                                    ? 'bg-gray-200 text-gray-500 line-through opacity-70 border border-gray-300'
                                    : 'bg-white text-gray-800 border border-gray-300 hover:shadow-lg'
                            }
                            ${isOverdue ? 'border-2 border-red-500 bg-red-50 text-red-700' : ''}
                        `}
                    >
                        <div className="flex items-center flex-grow">
                            <input
                                type="checkbox"
                                checked={todo.checked}
                                onChange={() => toggleTodo(todo.id)}
                                className="mr-3 w-5 h-5 accent-blue-500 cursor-pointer rounded-sm"
                            />
                            <span className={`text-lg font-medium ${isOverdue ? 'font-semibold' : ''}`}>
                                {todo.text}
                            </span>
                            {todo.deadline && (
                                <span
                                    className={`ml-3 text-sm ${
                                        isOverdue ? 'text-red-600 font-semibold' : 'text-gray-500'
                                    }`}
                                >
                                    {isOverdue ? '(마감: ' : '(종료 예정: '}
                                    {todo.deadline}
                                </span>
                            )}
                        </div>
                        <button
                            onClick={() => removeTodo(todo.id)}
                            className="ml-4 px-3 py-1 bg-red-500 text-white rounded-md text-sm font-semibold
                                       hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2
                                       transition-colors duration-300 transform hover:scale-105"
                        >
                            삭제
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default TodoList
