function TodoForm({ addTodo }) {
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const text = e.target.text.value.trim()
        const deadline = e.target.deadline.value
        if (!text) return

        addTodo({ text, deadline })

        e.target.text.value = ''
        e.target.deadline.value = ''
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" name="text" placeholder="할 일 입력" required />
            <input type="date" name="deadline" />
            <button type="submit">일정 등록!</button>
        </form>
    )
}

export default TodoForm
