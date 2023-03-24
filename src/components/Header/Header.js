import { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import AddEditTaskModal from '../AddEditTaskModal/AddEditTaskModal';
import OptionMenu from '../OptionMenu/OptionMenu';
import AddEditBoardModal from '../AddEditBoardModal/AddEditBoardModal';
import DeleteModal from '../DeleteModal/DeleteModal';
import OptionBtn from '../OptionBtn/OptionBtn';
import BoardsMenu from '../BoardsMenu/BoardsMenu';
import useWindowSize from '../useWindowSize/useWindowSize';
import logo from '../../image/logo.svg';
import iconChevronDown from '../../image/icon-chevron-down.svg';
import iconChevronUp from '../../image/icon-chevron-up.svg';
import iconAddTaskMobile from '../../image/icon-add-task-mobile.svg';
import './Header.scss';

function Header({ isSidebarOpen, isDarkTheme, setIsDarkTheme }) {
  const boards = useSelector(state => state.boards);
  const board = boards.find(board => board.isActive);

  const [isBoardsMenuOpen, setIsBoardsMenuOpen] = useState(false);
  const [isAddEditTaskModalOpen, setIsAddEditTaskModalOpen] = useState(false);
  const [isAddEditBoardModalOpen, setIsAddEditBoardModalOpen] = useState(false);
  const [isOptionMenuOpen, setIsOptionMenuOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const size = useWindowSize();

  return (
    <>
      <div className={'Header ' + (isSidebarOpen ? 'Header-sidebar-open' : '')}>
        <div
          className='Header-board-name-container'
          onClick={size.width < 768
            ? isBoardsMenuOpen
              ? () => setIsBoardsMenuOpen(false)
              : () => setIsBoardsMenuOpen(true)
            : null
          }
        >
          {size.width < 768 && <img src={logo} alt='logo'></img>}
          <div className='Header-board-name'>{board.name}</div>
          {size.width < 768 &&
            <img src={isBoardsMenuOpen ? iconChevronUp : iconChevronDown} alt='menu open'></img>}
        </div>
        <div className='Header-btns'>
          <Button
            type='violet'
            value={size.width < 768
              ? <img src={iconAddTaskMobile} alt='add new task'></img>
              : '+ Add New Task'
            }
            onClick={() => setIsAddEditTaskModalOpen(true)}
          />
          <OptionBtn
            onClick={() => setIsOptionMenuOpen(true)}
          />
        {isOptionMenuOpen &&
          <OptionMenu
            type='Board'
            setIsAddEditBoardModalOpen={setIsAddEditBoardModalOpen}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
            setIsOptionMenuOpen={setIsOptionMenuOpen}
          />
        }
        </div>
      </div>
      {isBoardsMenuOpen &&
        <BoardsMenu
          isDarkTheme={isDarkTheme}
          setIsDarkTheme={setIsDarkTheme}
          isBoardsMenuOpen={isBoardsMenuOpen}
          setIsBoardsMenuOpen={setIsBoardsMenuOpen}
          setIsAddEditBoardModalOpen={setIsAddEditBoardModalOpen}
        />}

      {isAddEditTaskModalOpen &&
        <AddEditTaskModal
          type='Add New'
          setIsAddEditTaskModalOpen={setIsAddEditTaskModalOpen}
        />
      }
      {isAddEditBoardModalOpen &&
        <AddEditBoardModal
          type='Edit'
          setIsAddEditBoardModalOpen={setIsAddEditBoardModalOpen}
        />
      }
      {isDeleteModalOpen &&
        <DeleteModal
          type='Board'
          boardName={board.name}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
        />
      }
    </>
  );
}

export default Header;