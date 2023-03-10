import { useDispatch } from 'react-redux';
import { deleteBoard, deleteTask, setBoardActive } from '../../store/boardsSlice';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import './DeleteModal.scss';

function DeleteModal({ type, taskTitle, boardName, taskIndex, columnIndex, setDeleteModalOpen, setOpenTaskModal }) {
  const dispatch = useDispatch();

  function setDeleteBoard() {
    dispatch(deleteBoard());
    dispatch(setBoardActive({ index: 0 }));
    setDeleteModalOpen(false);
  }

  function setDeleteTask() {
    dispatch(deleteTask({ taskIndex, columnIndex }));
    setDeleteModalOpen(false);
    setOpenTaskModal(false);
  }

  return (
    <Modal>
      <div className='DeleteModal-title'>Delete this {type}</div>
      <div className='DeleteModal-text'>{type === 'Task' ?
        `Are you sure you want to delete the "${taskTitle}" task and its subtasks? This action cannot be reversed.` :
        `Are you sure you want to delete the "${boardName}" board? This action will remove all columns and tasks and cannot be reversed.`
      }</div>
      <div className='DeleteModal-btns'>
        <Button
          type='red'
          value='Delete'
          onClick={type === 'Board' ? setDeleteBoard : setDeleteTask}
        />
        <Button
          value='Cancel'
          onClick={() => setDeleteModalOpen(false)}
        />
      </div>
    </Modal>
  );
}

export default DeleteModal;