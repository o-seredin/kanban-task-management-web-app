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
  
  const [isOpenTaskModal, setIsOpenTaskModal] = useState(false);

  return (
    <>
      <div
        className='Task'
        onClick={() => setIsOpenTaskModal(true)}
      >
        <div className='Task-title'>{task.title}</div>
        <div
          className='Task-subtasks'
        >{completedSubtasks.length} of {subtasks.length} subtasks</div>
      </div>
      {isOpenTaskModal &&
        <TaskModal
          taskIndex={taskIndex}
          columnIndex={columnIndex}
          setIsOpenTaskModal={setIsOpenTaskModal}
        />
      }
    </>
  );
}

export default Task;