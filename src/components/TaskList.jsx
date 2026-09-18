import TaskCard from './TaskCard'

function TaskList({ tasks, onDelete }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          task={task}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>
  )
}

export default TaskList