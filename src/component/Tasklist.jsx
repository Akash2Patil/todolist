import React from 'react'

const Tasklist = ({tasks}) => {
    
  return (
    <div className='mt-5 w-1/3 bg-[#ecedf6] rounded-lg'>
    <ul>
      {tasks.map((item,index)=>(<li className='bg-white p-3 rounded-sm m-5 flex gap-3 items-center' key={index}> <input type="checkbox" name="" id="" /> <p className='w-full break-words'>{item}</p><button>Edit</button></li>))}
    </ul>
    </div>
  )
}

export default Tasklist
