import React from 'react'

const Tasklist = ({ tasks, settask }) => {


  const handelCheckbox = (id) => {
    const updatedTasks = tasks.map((task) => {
      return task.id === id ? { ...task, completed: !task.completed } : task
    });
    settask(updatedTasks)
  };

  const handledelete = (id) => {
    const updatedtask = tasks.filter((task) => task.id !== id);
    settask(updatedtask);
  };


  return (
    <div className='mt-5 w-1/2  bg-[#ecedf6] rounded-lg overflow-y-auto'>

      {tasks.length > 0 ? <ul>
        {tasks.map((task) => (
          <li className='bg-white p-3 rounded-sm m-5 flex items-center ' key={task.id}>
            <input className='mt-1 mr-3' type="checkbox" checked={task.completed} onChange={() => handelCheckbox(task.id)} /> <p className={`w-[100%] break-all ${task.completed ? 'line-through text-zinc-500' : ''}`}>{task.text}</p> <button onClick={() => handledelete(task.id)} className=' bg-red-400 p-2 text-white rounded cursor-pointer'>Delete</button></li>))}
      </ul> : <p className='text-center text-xl font-semibold p-3'>No Todos</p>}
    </div>
  )
}

export default Tasklist
