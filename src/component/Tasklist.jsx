import React, { useState } from "react";

const Tasklist = ({ tasks, settask }) => {
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleCheckbox = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    settask(updatedTasks);
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    settask(updatedTasks);
  };


  const handleEdit = (id) => {
    const t = tasks.find((task) => task.id === id);
    setEditingId(id);
    setEditingText(t.text);
  };

  const handleSave = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === editingId ? { ...task, text: editingText } : task
    );
    settask(updatedTasks);
    setEditingId(null);
    setEditingText("");
  };


  const handleCancel = () => {
    setEditingId(null);
    setEditingText("");
  };
  return (
    <div className="mt-5 m-2 w-[90%] sm:w-1/2 md:w-[70%] lg:w-[50%] bg-[#ecedf6] rounded-lg overflow-y-auto">
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className="bg-white p-3 rounded-sm m-5 flex items-center"
            >
              <input
                className="mt-1 mr-3"
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCheckbox(task.id)}
              />
              {editingId === task.id ? (
                <input
                  className="flex-1 border p-1 mr-2"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSave()}
                  autoFocus
                />
              ) : (
                <p
                  className={`flex-1 break-all text-sm ${task.completed ? "line-through text-zinc-500 text-sm" : ""
                    }`}
                >
                  {task.text}
                </p>
              )}
              {editingId === task.id ? (
                <>
                  <button
                    onClick={handleSave}
                    className="bg-green-500 text-white p-2 rounded mr-1 cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>

                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-400 text-white p-2 rounded cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleEdit(task.id)}
                    className="bg-blue-400 text-white p-2 rounded mr-1 cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>

                  </button>

                  <button
                    onClick={() => handleDelete(task.id)}
                    className="bg-red-400 text-white p-2 rounded cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>

                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-xl font-semibold p-3">No Todos</p>
      )}
    </div>
  );
};

export default Tasklist;
