
import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [taskInput, setTaskInput] = useState('')

  function addTask() {
    if (taskInput.trim() === '') return

    setTasks([...tasks, taskInput])
    setTaskInput('')
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  return (
    <div className="app">
      <h1>Campus Connect</h1>
      <p>My Task Manager</p>

      <div className="task-input">
        <input
          type="text"
          placeholder="Enter a task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <h2>My Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => deleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App