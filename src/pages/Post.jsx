import TodoForm from '../components/TodoForm'
import useTodos from '../hooks/useTodos'

export default function Post() {
    const { addTodo } = useTodos()

    return <TodoForm addTodo={addTodo} />
}
