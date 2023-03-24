import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBoardActive } from '../../store/boardsSlice';
import BoardBtn from '../BoardBtn/BoardBtn';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import AddEditBoardModal from '../AddEditBoardModal/AddEditBoardModal';
import './BoardsMenu.scss';

function BoardsMenu({ isDarkTheme, setIsDarkTheme, isBoardsMenuOpen, setIsBoardsMenuOpen }) {
  const dispatch = useDispatch();
  const boards = useSelector(state => state.boards);

  const [isAddEditBoardModalOpen, setIsAddEditBoardModalOpen] = useState(false);

  return (
    <>
      <div className='BoardsMenu-container'>
        <div className='BoardsMenu'>
          <div className='BoardsMenu-boards-text'>ALL BOARDS ({boards.length})</div>
          <div className='BoardsMenu-boards-container'>
            {boards.map((board, index) => {
              return (
                <BoardBtn
                  className={board.isActive && 'BoardBtn-active'}
                  board={board}
                  index={index}
                  key={index}
                  onClick={() => dispatch(setBoardActive({ index }))}
                />
              );
            })}
            <BoardBtn
              type='new'
              onClick={() => {
                isBoardsMenuOpen && setIsBoardsMenuOpen(false);
                setIsAddEditBoardModalOpen(true);
              }}
            />
          </div>
          <ThemeBtn
            isDarkTheme={isDarkTheme}
            setIsDarkTheme={setIsDarkTheme}
          />
        </div>
      </div>
      {isAddEditBoardModalOpen &&
        <AddEditBoardModal
          type='Add New'
          setIsAddEditBoardModalOpen={setIsAddEditBoardModalOpen}
        />
      }
    </>
  );
}

export default BoardsMenu;