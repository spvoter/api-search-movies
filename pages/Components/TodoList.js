import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'


function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(todo, ...todos);
    }

    return (
        <div>
            <h1 className='w-fit py-2 px-4 my-2 mx-2 rounded-md bg-slate-500 text-white'S>What's the plan for today?</h1>
            <TodoForm
                onSubmit={addTodo}>
            </TodoForm>

            <Todo
                todos = {todos}>
            </Todo>

        </div>
  )
}

export default TodoList;