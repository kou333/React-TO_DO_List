// components/TaskItem.js
export default function TaskItem({ task }) {
    return (
      <div className="border p-4 rounded shadow">
        <h3 className="font-bold">{task.title}</h3>
        <p>{task.description}</p>
        {task.recurrence && <p>Recurs: {task.recurrence}</p>}
      </div>
    );
  }
  