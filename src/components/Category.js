import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../redux/dashboardSlice';
import Widget from './Widget';


const Category = ({ category}) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const dispatch = useDispatch();

  const handleAddWidget = () => {
    
    const newWidget = {
      id: Date.now(),
      name: widgetName,
      type: 'text',
      data: widgetText
    };
    dispatch(addWidget({ categoryId: category.id, widget: newWidget }));
    setWidgetName('');
    setWidgetText('');
  };

  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="widgets">
        {category.widgets
        .map(widget => (
          <Widget key={widget.id} widget={widget}
          
          
          />
        ))}
        <div>
          <input
            type="text"
            placeholder="Widget Name"
            value={widgetName}
            onChange={e => setWidgetName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Widget Text"
            value={widgetText}
            onChange={e => setWidgetText(e.target.value)}
          />
          <button onClick={handleAddWidget}>+ Add Widget</button>
        </div>
      </div>
      
    </div>
  );
};

export default Category;


