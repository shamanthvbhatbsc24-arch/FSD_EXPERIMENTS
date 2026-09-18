import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

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
      <Header />

      <TaskForm
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        onAdd={addTask}
      />

      <h2>My Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
        />
      )}
    </div>
  )
}

export default App