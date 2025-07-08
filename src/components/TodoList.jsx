function TodoList({ todos, removeTodo, toggleTodo }) {
    const today = new Date().toISOString().slice(0, 10)

    return (
        <ul>
            {todos.map((todo) => {
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
    )
}

export default TodoList
