import React from 'react'
import Addtask from './component/Addtask'

const App = () => {
  return (
    <div className='w-full h-screen bg-[#f8f8ff] flex flex-col items-center p-[6%]'>
      <h1 className='text-5xl text-zinc-700 font-bold mb-10'>To Do list</h1>
      <Addtask/>
    </div>
  )
}

export default App
