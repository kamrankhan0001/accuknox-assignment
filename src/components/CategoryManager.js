import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeWidget } from '../redux/dashboardSlice';
import '../App.css'

const CategoryManager = () => {
  const categories = useSelector((state) => state.dashboard.categories);
  const dispatch = useDispatch();

  const handleCheckboxChange = (categoryId, widgetId, checked) => {
    if (!checked) {
      dispatch(removeWidget({ categoryId, widgetId }));
    }
  };

  return (
    <div className="category-manager">
      {categories.map((category) => (
        <div key={category.id} className="category">
          <h4>{category.name}</h4>
          {category.widgets.map((widget) => (
            <div key={widget.id} className="widget-checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={true}
                  onChange={(e) =>
                    handleCheckboxChange(category.id, widget.id, e.target.checked)
                  }
                />
                {widget.name}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CategoryManager;
