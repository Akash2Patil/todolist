import React from 'react'

const Tasklist = ({tasks}) => {
    
  return (
    <div className='mt-5 w-1/3 bg-[#ecedf6] rounded-lg'>
    <ul>
      {tasks.map((item,index)=>(<li className='bg-white p-3 rounded-sm m-5' key={index}><p className='w-full break-words'>{item}</p></li>))}
    </ul>
    </div>
  )
}

export default Tasklist
