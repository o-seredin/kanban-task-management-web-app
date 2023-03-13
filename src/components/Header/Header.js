import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import AddEditTaskModal from '../AddEditTaskModal/AddEditTaskModal';
import OptionMenu from '../OptionMenu/OptionMenu';
import AddEditBoardModal from '../AddEditBoardModal/AddEditBoardModal';
import DeleteModal from '../DeleteModal/DeleteModal';
import OptionBtn from '../OptionBtn/OptionBtn';
import logo from '../../image/logo.svg';
import iconChevronDown from '../../image/icon-chevron-down.svg';
import iconChevronUp from '../../image/icon-chevron-up.svg';
import iconAddTaskMobile from '../../image/icon-add-task-mobile.svg';
import './Header.scss';
import BoardsMenu from '../BoardsMenu/BoardsMenu';

function useWindowSize() {
  const[windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });
  
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

function Header({ sidebarOpen }) {
  const boards = useSelector(state => state.boards);
  const board = boards.find(board => board.isActive);

  const [isBoardsMenuOpen, setIsBoardsMenuOpen] = useState(false);
  const [addTaskModalOpen, setAddTaskModalOpen] = useState(false);
  const [optionMenuOpen, setOptionMenuOpen] = useState(false);
  const [editBoardModalOpen, setEditBoardModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const size = useWindowSize();

  return (
    <>
      <div className={'Header ' + (sidebarOpen ? 'Header-sidebar-open' : '')}>
        <div className='Header-board-name-container'>
          {size.width < 768 && <img src={logo}></img>}
          <div className='Header-board-name'>{board.name}</div>
          {size.width < 768 &&
            <img
              src={isBoardsMenuOpen ? iconChevronUp : iconChevronDown}
              onClick={isBoardsMenuOpen
                ? () => setIsBoardsMenuOpen(false)
                : () => setIsBoardsMenuOpen(true)
              }
            ></img>}
        </div>
        <div className='Header-btns'>
          <Button
            type='violet'
            value={size.width < 768
              ? <img src={iconAddTaskMobile}></img>
              : '+ Add New Task'}
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
      {isBoardsMenuOpen && <BoardsMenu/>}
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