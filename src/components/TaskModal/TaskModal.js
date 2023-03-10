import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTaskStatus } from '../../store/boardsSlice';
import Modal from '../Modal/Modal';
import Label from '../Label/Label';
import SelectStatus from '../SelectStatus/SelectStatus';
import Subtask from '../Subtask/Subtask';
import OptionMenu from '../OptionMenu/OptionMenu';
import AddEditTaskModal from '../AddEditTaskModal/AddEditTaskModal';
import DeleteModal from '../DeleteModal/DeleteModal';
import OptionBtn from '../OptionBtn/OptionBtn';
import './TaskModal.scss';

function TaskModal({ columnIndex, taskIndex, setOpenTaskModal }) {
  const dispatch = useDispatch();
  const boards = useSelector(state => state.boards);
  const board = boards.find(board => board.isActive);
  const column = board.columns.find((column, index) => index === columnIndex);
  const task = column.tasks.find((task, index) => index === taskIndex);
  const subtasks = task.subtasks;
  const completedSubtasks = subtasks.filter(subtask => subtask.isCompleted);

  const [optionMenuOpen, setOptionMenuOpen] = useState(false);
  const [editTaskModalOpen, setEditTaskModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const [newStatus, setNewStatus] = useState(task.status);
  const [newColumnIndex, setNewColumnIndex] = useState(columnIndex);

  function modalClose(event) {
    if(event.target === event.currentTarget) {
      dispatch(setTaskStatus({ taskIndex, columnIndex, newStatus, newColumnIndex }));
      setOpenTaskModal(false);
    }
  }

  function handleChange(event) {
    setNewStatus(event.target.value);
    setNewColumnIndex(event.target.selectedIndex);
  }

  return (
    <>
      <Modal onClick={modalClose}>
        <div className='TaskModal-title-container'>
          <div>{task.title}</div>
          <OptionBtn
            onClick={() => setOptionMenuOpen(true)}
          />
          {optionMenuOpen &&
            <OptionMenu
              type='Task'
              setEditTaskModalOpen={setEditTaskModalOpen}
              setDeleteModalOpen={setDeleteModalOpen}
            />
          }
        </div>
        <div className='TaskModal-description'>{task.description}</div>
        <div className='TaskModal-subtasks-container'>
          <Label text={`Subtasks (${completedSubtasks.length} of ${subtasks.length})`}/>
          {subtasks.map((subtask, index) => {
            return (
              <Subtask
                key={index}
                subtaskIndex={index}
                taskIndex={taskIndex}
                columnIndex={columnIndex}
              />
            );
          })}
        </div>
        <Label text='Current Status'/>
        <SelectStatus
          value={newStatus}
          onChange={handleChange}
        >
          {board.columns.map((column, index) => {
            return (
              <option key={index}>{column.name}</option>
            );
          })}
        </SelectStatus>
      </Modal>
      {editTaskModalOpen &&
        <AddEditTaskModal
          type='Edit'
          taskIndex={taskIndex}
          columnIndex={columnIndex}
          setEditTaskModalOpen={setEditTaskModalOpen}
        />
      }
      {deleteModalOpen &&
        <DeleteModal
          type='Task'
          taskTitle={task.title}
          taskIndex={taskIndex}
          columnIndex={columnIndex}
          setDeleteModalOpen={setDeleteModalOpen}
          setOpenTaskModal={setOpenTaskModal}
        />
      }
    </>
  );
}

export default TaskModal;