import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTask, editTask } from '../../store/boardsSlice';
import { v4 as uuidv4 } from 'uuid';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Description from '../Description/Description';
import SelectStatus from '../SelectStatus/SelectStatus';
import Label from '../Label/Label';
import './AddEditTaskModal.scss';

function AddEditTaskModal({ type, taskIndex, columnIndex, setIsAddEditTaskModalOpen }) {
  const dispatch = useDispatch();
  const boards = useSelector(state => state.boards);
  const board = boards.find(board => board.isActive);

  const [firstLoad, setFirstLoad] = useState(true);
  const [taskTitle, setTaskTitle] = useState();
  const [description, setDescription] = useState();
  const [subtasks, setSubtasks] = useState([]);
  const [newColumnIndex, setNewColumnIndex] = useState(0);
  const [isValid, setIsValid] = useState(true);

  if (type === 'Add New' && firstLoad) {
    setTaskTitle('');
    setSubtasks([{title: '', isCompleted: false, id: uuidv4()}, {title: '', isCompleted: false, id: uuidv4()}]);
    setFirstLoad(false);
  }
  if (type === 'Edit' && firstLoad) {
    const column = board.columns.find((column, index) => index === columnIndex);
    const task = column.tasks.find((task, index) => index === taskIndex);
    setSubtasks(task.subtasks.map(subtask => {
      return {...subtask, id: uuidv4()};
    }));
    setTaskTitle(task.title)
    setFirstLoad(false);
  }
  
  function handleSubtasksChange(id, newValue) {
    setSubtasks(subtasks => {
      const newState = [...subtasks];
      const subtask = newState.find(subtask => subtask.id === id);
      subtask.title = newValue;
      return newState;
    });
  }

  function addNewSubtask() {
    setSubtasks([...subtasks, {title: '', isCompleted: false, id: uuidv4()}]);
  }

  function deleteSubtask(id) {
    setSubtasks(subtasks.filter(subtask => subtask.id !== id));
  }

  function handleStatusChange(event) {
    setNewColumnIndex(event.target.selectedIndex);
  }

  function createNewTask() {
    const isValid = validate();
    if (isValid) {
      dispatch(addNewTask({ taskTitle, description, subtasks, newColumnIndex }));
      setIsAddEditTaskModalOpen(false);
    }
  }

  function saveChanges() {
    const isValid = validate();
    if (isValid) {
      dispatch(editTask({ taskTitle, description, subtasks, columnIndex, taskIndex }));
      setIsAddEditTaskModalOpen(false);
    }
  }

  function validate() {
    setIsValid(false);
    if (!taskTitle) return false;
    for (let i = 0; i < subtasks.length; i++) {
      if (!subtasks[i].title) return false;
    }
    setIsValid(true);
    return true;
  }

  function modalClose(event) {
    if (event.target === event.currentTarget) {
      setIsAddEditTaskModalOpen(false);
    }
  }

  return (
    <Modal onClick={modalClose}>
      <div className='AddEditTaskModal-title'>{type} Task</div>
      <div className='AddEditTaskModal-container'>
        <Label text='Task Name'/>
        <Input
          value={taskTitle}
          placeholder='e.g. Take coffee break'
          onChange={(event) => setTaskTitle(event.target.value)}
          isValid={isValid}
        />
      </div>
      <div className='AddEditTaskModal-container'>
        <Label text='Description'/>
        <Description
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div className='AddEditTaskModal-container'>
        <Label text='Subtasks'/>
        {subtasks.map((subtask, index) => {
          return (
            <Input
              type='delete'
              value={subtask.title}
              key={index}
              onChange={(event) => handleSubtasksChange(subtask.id, event.target.value)}
              onClick={() => deleteSubtask(subtask.id)}
              isValid={isValid}
            />
          );
        })}
        <Button
          type='violet'
          value='+ Add New Subtask'
          onClick={addNewSubtask}
        />
      </div>
      <div className='AddEditTaskModal-container'>
        <Label text='Current Status'/>
        <SelectStatus
          onChange={handleStatusChange}
        >
          {board.columns.map((column, index) => {
            return (
              <option key={index}>{column.name}</option>
            );
          })}
        </SelectStatus>
      </div>
      <Button
        type='violet'
        value={type === 'Add New' ? 'Create New Task' : 'Save Changes'}
        onClick={type === 'Add New' ? createNewTask : saveChanges}
      />
    </Modal>
  );
}

export default AddEditTaskModal;