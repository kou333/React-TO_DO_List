// components/TaskList.js
import TaskItem from './TaskItem';

export default function TaskList({ tasks }) {
  return (
    <div className="task-list space-y-4">
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </div>
  );
}
