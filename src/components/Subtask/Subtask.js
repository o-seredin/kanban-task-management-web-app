import { useSelector, useDispatch } from 'react-redux';
import { setSubtaskCompleted } from '../../store/boardsSlice';
import './Subtask.scss';

function Subtask({ subtaskIndex, taskIndex, columnIndex }) {
  const dispatch = useDispatch();
  const boards = useSelector(state => state.boards);
  const board = boards.find(board => board.isActive);
  const column = board.columns.find((column, index) => index === columnIndex);
  const task = column.tasks.find((task, index) => index === taskIndex);
  const subtask = task.subtasks.find((subtask, index) => index === subtaskIndex);
  
  function handleChange() {
    dispatch(setSubtaskCompleted({ subtaskIndex, taskIndex, columnIndex }));
  }

  return (
    <div className='Subtask'>
      <input
        type='checkbox'
        checked={subtask.isCompleted}
        onChange={handleChange}
      ></input>
      <div className='Subtask-title'>{subtask.title}</div>
    </div>
  );
}

export default Subtask;