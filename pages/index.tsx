import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'

const Home: NextPage = () => {
  return (
    <div>
      <TodoList></TodoList>
      
    
    </div>
  )
}

export default Home
