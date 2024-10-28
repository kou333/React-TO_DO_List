// components/TaskForm.js
import { useState } from 'react';
import RecurrenceOptions from './RecurrenceOptions';
// pages/index.js
import TaskForm from '../components/TaskForm'; // Ensure this path is correct
import TaskList from '../components/TaskList';


export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [recurrence, setRecurrence] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ title, description, recurrence });
    setTitle('');
    setDescription('');
    setRecurrence('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
        className="border p-2 w-full"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        className="border p-2 w-full"
      />
      <RecurrenceOptions onRecurrenceChange={setRecurrence} />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Task
      </button>
    </form>
  );
}
