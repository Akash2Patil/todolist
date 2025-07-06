import React, { useRef, useState, useEffect } from "react";
import Tasklist from "./Tasklist";

const Addtask = () => {
  const taskin = useRef(null);
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("todo-list");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = taskin.current.value.trim();
    if (value) {
      const newTask = {
        id: Date.now(),
        text: value,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      taskin.current.value = "";
    } else {
      alert("Please add the task");
    }
  };

  return (
    <>
      <div className="border border-[#c7c6c6] rounded-lg md:w-1/3 lg:w-[45%] p-5">
        <form onSubmit={handleSubmit} className="flex gap-3 justify-center">
          <input
            className="border p-3 w-full rounded-sm"
            ref={taskin}
            type="text"
          />
          <input
            className="bg-[#646ff0] text-white font-semibold p-3 rounded-sm cursor-pointer"
            type="submit"
            value="Add Task"
          />
        </form>
      </div>

      <Tasklist tasks={tasks} settask={setTasks} />
    </>
  );
};

export default Addtask;
