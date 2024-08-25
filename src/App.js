
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Dashboard from './components/Dashboard';
import { WidgetSearch } from './components/WidgetSearch';
import './App.css';

function App() {
  const [filter, setFilter] = useState('7');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          
          <div className='serch'>
          <a href='Home'>Home</a>
          <a href='Dashboard'>Dashboard</a>
        <WidgetSearch onSearch={handleSearch} /> 
        <div className="filter-container">
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="7">Last 7 days</option>
                    <option value="30">Last 30 days</option>
                    <option value="90">Last 90 days</option>
                </select>
            </div>
        </div>
        </header>
        <h2>CNAPP Dashboard</h2>
        <main className="App-main">
        
          <Dashboard />
        </main>
      </div>
    </Provider>
  );
}

export default App;
