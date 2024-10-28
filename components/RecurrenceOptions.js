// components/RecurrencePicker.js
import { useState } from 'react';

export default function RecurrencePicker({ onChange }) {
  const [frequency, setFrequency] = useState('None');

  const handleFrequencyChange = (e) => {
    setFrequency(e.target.value);
    onChange({ frequency: e.target.value });
  };

  return (
    <div>
      <label>Recurrence:</label>
      <select
        value={frequency}
        onChange={handleFrequencyChange}
        className="border p-2 w-full"
      >
        <option value="None">None</option>
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>
    </div>
  );
}
