import React from 'react'

const Tasklist = ({tasks, settask }) => {
 

  const handelCheckbox = (id)=>{
    const updatedTasks = tasks.map((task)=>{
      return task.id === id ? {...task, completed: !task.completed} : task
    });
    settask(updatedTasks)
  }
  
    
  return (
    <div className='mt-5 w-1/2  bg-[#ecedf6] rounded-lg '>
    
      {tasks.length > 0 ? <ul>
      {tasks.map((task)=>(<li className='bg-white p-3 rounded-sm m-5 flex items-center ' key={task.id}> <input className='mt-1 mr-3' type="checkbox" checked={task.completed} onChange={()=>handelCheckbox(task.id)}/> <p className={`w-[100%] break-all ${task.completed ? 'line-through text-zinc-500' : ''}`}>{task.text}</p></li>))}
    </ul> : <p className='text-center text-xl font-semibold p-3'>No Todos</p>}
      
   {/* { <ul>
      {tasks.map((task)=>(<li className='bg-white p-3 rounded-sm m-5 flex items-center ' key={task.id}> <input className='mt-1 mr-3' type="checkbox" checked={task.completed} onChange={()=>handelCheckbox(task.id)}/> <p className={`w-[100%] break-all ${task.completed ? 'line-through text-zinc-500' : ''}`}>{task.text}</p></li>))}
    </ul>}  */}
    </div>
  )
}

export default Tasklist
