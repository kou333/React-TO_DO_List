// components/DatePicker.js
import { useState } from 'react';

export default function DatePicker({ onDateChange }) {
  const [date, setDate] = useState('');

  const handleDateChange = (e) => {
    setDate(e.target.value);
    onDateChange(e.target.value);
  };

  return (
    <input
      type="date"
      value={date}
      onChange={handleDateChange}
      className="border p-2 w-full"
    />
  );
}
