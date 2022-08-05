import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'

const Home: NextPage = () => {
  return (
    <div className='bg-gray-800 w-fit h-fit py-4 px-4 my-4 mx-auto rounded-2xl'>
      <TodoList></TodoList>
      
    
    </div>
  )
}

export default Home
