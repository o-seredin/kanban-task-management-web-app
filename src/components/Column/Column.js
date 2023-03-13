import { useSelector } from 'react-redux';
import Task from '../Task/Task';
import './Column.scss';

function Column({ columnIndex }) {
  const boards = useSelector(state => state.boards);
  const board = boards.find(board => board.isActive);
  const column = board.columns.find((column, index) => index === columnIndex);
  const tasks = column.tasks;
  
  return (
    <div className='Column'>
      <div className='Column-name-container'>
        <div className='Column-name-icon'></div>
        <div className='Column-name'>{column.name} ({tasks.length})</div>
      </div>
      {tasks.map((task, index) => {
        return (
          <Task
            key={index}
            taskIndex={index}
            columnIndex={columnIndex}
          />
        );
      })}
    </div>
  );
}

export default Column;