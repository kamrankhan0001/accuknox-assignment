import React, { useState } from 'react';
import '../App.css';

export function WidgetSearch({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setTerm(searchTerm);
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Trigger handleChange with current term
      onSearch(term);
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        value={term}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Search any things..."
      />
    </div>
  );
}
