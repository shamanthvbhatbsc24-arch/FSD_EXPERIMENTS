function TaskCard({ task, onDelete }) {
  return (
    <li>
      <span>{task}</span>

      <button onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TaskCard