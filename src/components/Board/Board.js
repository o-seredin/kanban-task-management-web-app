import { useState } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';
import AddEditBoardModal from '../AddEditBoardModal/AddEditBoardModal';
import Column from '../Column/Column';
import NewColumnBtn from '../NewColumnBtn/NewColumnBtn';
import './Board.scss';
import BoardEmpty from '../BoardEmpty/BoardEmpty';

function Board({ sidebarOpen, setSidebarOpen, darkMode, setDarkMode }) {
  const boards = useSelector(state => state.boards);
  const board = boards.find(board => board.isActive);

  const [editBoardModalOpen, setEditBoardModalOpen] = useState(false);
  
  return (
    <div className={'Board ' + (sidebarOpen ? 'Board-sidebar-open' : '')}>
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
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
            setEditBoardModalOpen={setEditBoardModalOpen}
          />
        </>
        : <BoardEmpty type='edit'/>
      }
      {editBoardModalOpen &&
        <AddEditBoardModal
          type='Edit'
          setEditBoardModalOpen={setEditBoardModalOpen}
        />
      }
    </div>
  );
}

export default Board;