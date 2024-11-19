'use client'
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");  
  const [tasks, setTasks] = useState([]);


  const addTask = () => {
    if (task.trim() === "") return; 
    setTasks([
      ...tasks,
      { id: Date.now(), text: task, completed: false },
    ]);
    setTask(""); 
  };


  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

 
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <h1 className="title">To-Do List</h1>

      {/* Task input and add button */}
      <div className="task-input">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* Task list */}
      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)} className="delete-btn">
              Delete
            </button>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 50px auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .task-input {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .task-input input {
          flex: 1;
          padding: 8px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .task-input button {
          padding: 8px 16px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .task-input button:hover {
          background-color: #005bb5;
        }

        .task-list {
          list-style-type: none;
          padding: 0;
        }

        .task-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px;
          border-bottom: 1px solid #ddd;
        }

        .task-item.completed span {
          text-decoration: line-through;
          color: #888;
        }

        .task-item button {
          background-color: #e74c3c;
          color: white;
          border: none;
          padding: 5px 10px;
          border-radius: 4px;
          cursor: pointer;
        }

        .task-item button:hover {
          background-color: #c0392b;
        }
      `}</style>
    </div>
  );
}
