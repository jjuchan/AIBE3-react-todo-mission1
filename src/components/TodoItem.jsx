import React, { useState } from 'react'

function TodoItem({ todo, removeTodo, toggleTodo, updateTodo }) {
    const today = new Date().toISOString().slice(0, 10)

    const [isEditing, setIsEditing] = useState(false)
    const [editingText, setEditingText] = useState(todo.text)

    const isOverdue = todo.deadline && todo.deadline < today && !todo.checked

    const handleTextClick = () => {
        if (todo.checked) {
            return
        }
        setIsEditing(true)
        setEditingText(todo.text)
    }

    const handleSaveClick = () => {
        if (editingText.trim() === '') {
            alert('할 일 내용은 비워둘 수 없습니다.')
            return
        }
        updateTodo(todo.id, { text: editingText.trim() })
        setIsEditing(false)
    }

    const handleCancelClick = () => {
        setIsEditing(false)
        setEditingText(todo.text)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSaveClick()
        } else if (e.key === 'Escape') {
            handleCancelClick()
        }
    }

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
            <div className="flex items-center flex-grow min-w-0">
                <input
                    type="checkbox"
                    checked={todo.checked}
                    onChange={() => toggleTodo(todo.id)}
                    className="mr-3 w-5 h-5 accent-blue-500 cursor-pointer rounded-sm flex-shrink-0"
                />
                {isEditing ? (
                    <input
                        type="text"
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-grow p-1 border border-blue-400 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 min-w-0"
                        autoFocus
                    />
                ) : (
                    <span
                        className={`text-lg font-medium break-all flex-grow cursor-pointer
                                    ${isOverdue ? 'font-semibold' : ''}
                                    ${todo.checked ? 'text-gray-500 line-through' : 'text-gray-800'}`}
                        onClick={handleTextClick}
                    >
                        {todo.text}
                    </span>
                )}
                {todo.deadline && (
                    <span
                        className={`ml-3 text-sm flex-shrink-0 ${
                            isOverdue ? 'text-red-600 font-semibold' : 'text-gray-500'
                        }`}
                    >
                        {isOverdue ? '마감: ' : '종료 예정: '}
                        {todo.deadline}
                    </span>
                )}
            </div>

            <div className="flex flex-shrink-0 ml-4 space-x-2">
                {isEditing ? (
                    <>
                        <button
                            onClick={handleSaveClick}
                            className="px-3 py-1 bg-green-500 text-white rounded-md text-sm font-semibold
                                       hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2
                                       transition-colors duration-300"
                        >
                            저장
                        </button>
                        <button
                            onClick={handleCancelClick}
                            className="px-3 py-1 bg-gray-500 text-white rounded-md text-sm font-semibold
                                       hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2
                                       transition-colors duration-300"
                        >
                            취소
                        </button>
                    </>
                ) : (
                    <button
                        onClick={() => removeTodo(todo.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded-md text-sm font-semibold
                                   hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2
                                   transition-colors duration-300 transform hover:scale-105"
                    >
                        삭제
                    </button>
                )}
            </div>
        </li>
    )
}

export default TodoItem
