import { useState } from 'react'

function App() {
    const [todoId, setTodoId] = useState()

    const [todos, setTodos] = useState([
        { id: 1, text: '공부 하기', checked: false },
        { id: 2, text: '잠 자기', checked: false },
        { id: 3, text: '밥 먹기', checked: false },
    ])
    const handleOnSubmit = (e) => {
        e.preventDefault()
        setTodos([{ id: todoId, text: e.target.test.value, checked: false }, ...todos])
        setTodoId(todoId + 1)
    }

    // const removeTodo = (removeIndex) =>{
    //   const filterTodos
    // }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="test" />
                <button type="submit">일정 등록!</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input type="checkbox" onChange={() => toggleTodo(todo.id)}></input>
                        {todo.text}
                        <button onClick={() => removeTodo(todo.id)}> 일정 삭제 </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
