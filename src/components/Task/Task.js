import { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskModal from '../TaskModal/TaskModal';
import './Task.scss';

function Task({ columnIndex, taskIndex }) {
  const boards = useSelector(state => state.boards);
  const board = boards.find(board => board.isActive);
  const column = board.columns.find((column, index) => index === columnIndex);
  const task = column.tasks.find((task, index) => index === taskIndex);
  const subtasks = task.subtasks;
  const completedSubtasks = subtasks.filter(subtask => subtask.isCompleted);
  
  const [openTaskModal, setOpenTaskModal] = useState(false);

  return (
    <>
      <div
        className='Task'
        onClick={() => setOpenTaskModal(true)}
      >
        <div className='Task-title'>{task.title}</div>
        <div
          className='Task-subtasks'
        >{completedSubtasks.length} of {subtasks.length} subtasks</div>
      </div>
      {openTaskModal &&
        <TaskModal
          taskIndex={taskIndex}
          columnIndex={columnIndex}
          setOpenTaskModal={setOpenTaskModal}
        />
      }
    </>
  );
}

export default Task;