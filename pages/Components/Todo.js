import React, {useState} from 'react'
import { toEditorSettings } from 'typescript'
import TodoForm from './TodoForm'

function todo(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''


  })


  return props.todos.map((todo, index) => (
    <h1 className='bg-gray-400 py-2 px-4 my-1 mx-2 w-fit rounded-md'>{todo.text}</h1>
    
  ))

  
}

export default todo