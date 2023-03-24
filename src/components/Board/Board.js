import { useState } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';
import AddEditBoardModal from '../AddEditBoardModal/AddEditBoardModal';
import Column from '../Column/Column';
import NewColumnBtn from '../NewColumnBtn/NewColumnBtn';
import BoardEmpty from '../BoardEmpty/BoardEmpty';
import useWindowSize from '../useWindowSize/useWindowSize';
import './Board.scss';

function Board({ isSidebarOpen, setIsSidebarOpen, isDarkTheme, setIsDarkTheme }) {
  const boards = useSelector(state => state.boards);
  const board = boards.find(board => board.isActive);

  const [isAddEditBoardModalOpen, setIsAddEditBoardModalOpen] = useState(false);

  const size = useWindowSize();
  
  return (
    <div className={'Board ' + (isSidebarOpen ? 'Board-sidebar-open' : '')}>
      {size.width > 767 &&
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isDarkTheme={isDarkTheme}
          setIsDarkTheme={setIsDarkTheme}
        />
      }
      {board.columns.length > 0
        ? <>
          {board.columns.map((column, index) => {
            return (
              <Column
                key={index}
                columnIndex={index}
              />
            );
          })}
          <NewColumnBtn
            setIsAddEditBoardModalOpen={setIsAddEditBoardModalOpen}
          />
        </>
        : <BoardEmpty type='edit'/>
      }
      {isAddEditBoardModalOpen &&
        <AddEditBoardModal
          type='Edit'
          setIsAddEditBoardModalOpen={setIsAddEditBoardModalOpen}
        />
      }
    </div>
  );
}

export default Board;