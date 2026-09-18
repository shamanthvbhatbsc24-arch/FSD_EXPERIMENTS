function TaskForm({ taskInput, setTaskInput, onAdd }) {
  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter a task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />

      <button onClick={onAdd}>
        Add Task
      </button>
    </div>
  )
}

export default TaskForm