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
    <div className="mt-5 w-1/2 bg-[#ecedf6] rounded-lg overflow-y-auto">
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
                  className={`flex-1 break-all ${
                    task.completed ? "line-through text-zinc-500" : ""
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
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-400 text-white p-2 rounded cursor-pointer"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleEdit(task.id)}
                    className="bg-blue-400 text-white p-2 rounded mr-1 cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="bg-red-400 text-white p-2 rounded cursor-pointer"
                  >
                    Delete
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
