// pages/index.js
// pages/index.js
import TaskForm from '../components/TaskForm';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
      <TaskForm />
      {/* Add Task List Display Here */}
    </div>
  );
}
