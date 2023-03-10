import { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import AddEditTaskModal from '../AddEditTaskModal/AddEditTaskModal';
import OptionMenu from '../OptionMenu/OptionMenu';
import AddEditBoardModal from '../AddEditBoardModal/AddEditBoardModal';
import DeleteModal from '../DeleteModal/DeleteModal';
import OptionBtn from '../OptionBtn/OptionBtn';
import './Header.scss';

function Header({ sidebarOpen }) {
  const boards = useSelector(state => state.boards);
  const board = boards.find(board => board.isActive);

  const [addTaskModalOpen, setAddTaskModalOpen] = useState(false);
  const [optionMenuOpen, setOptionMenuOpen] = useState(false);
  const [editBoardModalOpen, setEditBoardModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <>
      <div className={'Header ' + (sidebarOpen ? 'Header-sidebar-open' : '')}>
        <div className='Header-board-name'>{board.name}</div>
        <div className='Header-btns'>
          <Button
            type='violet'
            value='+ Add New Task'
            onClick={() => setAddTaskModalOpen(true)}
          />
          <OptionBtn
            onClick={() => setOptionMenuOpen(true)}
          />
          {optionMenuOpen &&
            <OptionMenu
              type='Board'
              setEditBoardModalOpen={setEditBoardModalOpen}
              setDeleteModalOpen={setDeleteModalOpen}
            />
          }
        </div>
      </div>
      {addTaskModalOpen &&
        <AddEditTaskModal
          type='Add New'
          setAddTaskModalOpen={setAddTaskModalOpen}
        />
      }
      {editBoardModalOpen &&
        <AddEditBoardModal
          type='Edit'
          setEditBoardModalOpen={setEditBoardModalOpen}
        />
      }
      {deleteModalOpen &&
        <DeleteModal
          type='Board'
          boardName={board.name}
          setDeleteModalOpen={setDeleteModalOpen}
        />
      }
    </>
  );
}

export default Header;