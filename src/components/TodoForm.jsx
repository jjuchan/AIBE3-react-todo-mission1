import React from 'react'

function TodoForm({ addTodo }) {
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const text = e.target.text.value.trim()
        const deadline = e.target.deadline.value
        if (!text) {
            alert('할 일을 입력해주세요!')
            return
        }

        addTodo({ text, deadline })

        e.target.text.value = ''
        e.target.deadline.value = ''
    }

    return (
        <form
            onSubmit={handleOnSubmit}
            className="flex flex-col md:flex-row gap-3 p-6 bg-blue-50 rounded-lg shadow-md mb-6 items-center"
        >
            <input
                type="text"
                name="text"
                placeholder="할 일을 입력하세요"
                required
                className="flex-grow w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm
                           focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
                           text-gray-800 placeholder-gray-400 text-base"
            />

            <input
                type="date"
                name="deadline"
                className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm
                           focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
                           text-gray-800 cursor-pointer"
            />

            <button
                type="submit"
                className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md
                           hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                           transition-colors duration-300 transform hover:scale-105"
            >
                일정 등록!
            </button>
        </form>
    )
}

export default TodoForm
