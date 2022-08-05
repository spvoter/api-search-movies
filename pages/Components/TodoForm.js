import React, {useState} from 'react'

function TodoForm(props) {
const [input, setInput] = useState('')

const handleChange = e => {
    setInput(e.target.value);
}

const handleSubmit = e =>{
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() *1000),
        text: input

    });

}

  return (
    <form onSubmit={handleSubmit}>
        <input
        type='text' 
        placeholder='Add an item' 
        value={input} 
        name='text' 
        className='todo-input bg-slate-200 py-2 px-4 mx-2 mb-4 rounded-md'
        onChange={handleChange}></input>
        <button className='todo-button py-2 px-4 bg-slate-400 rounded-md'>Add to list</button>
    </form>
  )
}

export default TodoForm;