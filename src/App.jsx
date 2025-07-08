import { useState } from 'react'

function App() {
    const [todoId, setTodoId] = useState(4)

    const [todos, setTodos] = useState([
        { id: 1, text: '공부 하기', checked: false, deadline: '2025-07-20' },
        { id: 2, text: '잠 자기', checked: false, deadline: '2025-07-10' },
        { id: 3, text: '밥 먹기', checked: false, deadline: '2025-07-08' },
    ])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const text = e.target.text.value.trim()
        const deadline = e.target.deadline.value
        if (!text) return

        setTodos([{ id: todoId, text, checked: false, deadline }, ...todos])
        setTodoId(todoId + 1)
        e.target.text.value = ''
        e.target.deadline.value = ''
    }

    const removeTodo = (removeId) => {
        setTodos(todos.filter((todo) => todo.id !== removeId))
    }

    const toggleTodo = (updateId) => {
        setTodos(todos.map((todo) => (todo.id === updateId ? { ...todo, checked: !todo.checked } : todo)))
    }

    // 오늘 날짜 (YYYY-MM-DD) 구하기
    const today = new Date().toISOString().slice(0, 10)

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="text" placeholder="할 일 입력" required />
                <input type="date" name="deadline" />
                <button type="submit">일정 등록!</button>
            </form>
            <ul>
                {todos.map((todo) => {
                    // 마감일 지났으면 빨간색 표시
                    const isOverdue = todo.deadline && todo.deadline < today && !todo.checked
                    return (
                        <li
                            key={todo.id}
                            style={{
                                textDecoration: todo.checked ? 'line-through' : 'none',
                                color: isOverdue ? 'red' : 'inherit',
                            }}
                        >
                            <input type="checkbox" checked={todo.checked} onChange={() => toggleTodo(todo.id)} />
                            {todo.text} {todo.deadline && `(마감: ${todo.deadline})`}
                            <button onClick={() => removeTodo(todo.id)}>일정 삭제</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default App
