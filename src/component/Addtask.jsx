import React, { useRef, useState } from 'react'
import Tasklist from './Tasklist'

const Addtask = () => {
    const taskin = useRef(null)
    const [task, settask] = useState([])

    const handelSubmit = (e) => {
        e.preventDefault();
        const value = taskin.current.value;
        value ? settask([...task, value]) : alert("Please enter the task"); // this avoid the blank task
        taskin.current.value = "";
    }
    console.log(task);

    return (
        <>
            <div className='border border-[#c7c6c6] rounded-lg w-1/3 p-5'>
                <form action="" onSubmit={handelSubmit} className='flex gap-3 justify-center'>
                    <input className='border p-3 w-full rounded-sm' ref={taskin} type="text" placeholder='Add Task' />
                    <input className='bg-[#646ff0] text-white font-semibold p-3 rounded-sm cursor-pointer' type="submit" />
                </form>
            </div>
            <Tasklist tasks={task} />
        </>
    )
}

export default Addtask
