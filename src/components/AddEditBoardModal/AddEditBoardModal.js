import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewBoard, editBoard } from '../../store/boardsSlice';
import { v4 as uuidv4 } from 'uuid';
import Modal from '../Modal/Modal';
import Label from '../Label/Label';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './AddEditBoardModal.scss';

function AddEditBoardModal({ type, setAddBoardModalOpen, setEditBoardModalOpen }) {
  const dispatch = useDispatch();
  const boards = useSelector(state => state.boards);
  const board = boards.find(board => board.isActive);

  const [firstLoad, setFirstLoad] = useState(true);
  const [boardName, setBoardName] = useState();
  const [boardColumns, setBoardColumns] = useState([]);
  const [isValid, setIsValid] = useState(true);

  if (type === 'Add New' && firstLoad) {
    setBoardName('');
    setBoardColumns([{name: 'Todo', tasks: [], id: uuidv4()}, {name: 'Doing', tasks: [], id: uuidv4()}]);
    setFirstLoad(false);
  }
  if (type === 'Edit' && firstLoad) {
    setBoardColumns(board.columns.map(column => {
      return {...column, id: uuidv4()};
    }));
    setBoardName(board.name);
    setFirstLoad(false);
  }

  function handleColumsChange(id, newValue) {
    setBoardColumns(boardColumns => {
      const newState = [...boardColumns];
      const column = newState.find(column => column.id === id);
      column.name = newValue;
      return newState;
    });
  }

  function addNewColumn() {
    setBoardColumns([...boardColumns, {name: '', tasks: [], id: uuidv4()}]);
  }

  function deleteColumn(id) {
    setBoardColumns(boardColumns.filter(boardColumn => boardColumn.id !== id));
  }

  function createNewBoard() {
    const isValid = validate();
    if (isValid) {
      dispatch(addNewBoard({ boardName, boardColumns }));
      setAddBoardModalOpen(false);
    }
  }

  function saveEditBoard() {
    const isValid = validate();
    if (isValid) {
      dispatch(editBoard({ boardName, boardColumns }));
      setEditBoardModalOpen(false);
    }
  }

  function validate() {
    setIsValid(false);
    if (!boardName) return false;
    for (let i = 0; i < boardColumns.length; i++) {
      if (!boardColumns[i].name) return false;
    }
    setIsValid(true);
    return true;
  }

  function modalClose(event) {
    if (event.target === event.currentTarget) {
      type === 'Add New' ? setAddBoardModalOpen(false) : setEditBoardModalOpen(false);
    }
  }

  return (
    <Modal onClick={modalClose}>
      <div className='AddEditBoardModal-title'>{type} Board</div>
      <div className='AddEditBoardModal-container'>
        <Label text='Board Name'/>
        <Input
          value={boardName}
          placeholder='e.g. Web Design'
          onChange={(event) => setBoardName(event.target.value)}
          isValid={isValid}
        />
      </div>
      <div className='AddEditBoardModal-container'>
        <Label text='Board Columns'/>
        {boardColumns.map((column, index) => {
          return (
            <Input
              type='delete'
              value={column.name}
              key={index}
              onChange={(event) => handleColumsChange(column.id, event.target.value)}
              onClick={() => deleteColumn(column.id)}
              isValid={isValid}
            />
          );
        })}
        <Button
          type='violet'
          value='+ Add New Column'
          onClick={addNewColumn}
        />
      </div>
      <Button
        type='violet'
        value={type === 'Add New' ? 'Create New Board' : 'Save Changes'}
        onClick={type === 'Add New' ? createNewBoard : saveEditBoard}
      />
    </Modal>
  );
}

export default AddEditBoardModal;