import '../index.css';
import React, {  } from 'react';
import { useSelector } from 'react-redux';
import Category from './Category';
import CategoryManager from './CategoryManager';

const Dashboard = () => {
  
  const categories = useSelector(state => state.dashboard.categories);

  return (
    <div className="dashboard">
      
      {categories.map(category => (
        <Category key={category.id} category={category} />
      ))}
      <CategoryManager />
    </div>
  );
};

export default Dashboard;


