import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../redux/dashboardSlice';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Widget = ({ widget }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ categoryId: widget.categoryId, widgetId: widget.id }));
  };

  let content;
  if (widget.type === 'chart') {
    const data = {
      labels: ['Connected(2)', 'Not Connected(2)', 'Failed(1589)', 'Wrong(681)'],
      datasets: [
        {
          data: [widget.data.connected, widget.data.notConnected, widget.data.failed, widget.data.wrong],
          backgroundColor: ['blue', 'green', 'red', 'yellow']
        }
      ]
    };
    content = <Doughnut data={data} />;
  } else {
    content = <p>{widget.data}</p>;
  }

  return (
    <div className="widget">
      <h3>{widget.name}</h3>
      {content}
      <button onClick={handleRemove} className="remove-widget-button">✕</button>
    </div>
  );
};

export default Widget;
