import { useState } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';
import AddEditBoardModal from '../AddEditBoardModal/AddEditBoardModal';
import Column from '../Column/Column';
import NewColumnBtn from '../NewColumnBtn/NewColumnBtn';
import './Board.scss';

function Board({ sidebarOpen, setSidebarOpen, darkMode, setDarkMode }) {
  const boards = useSelector(state => state.boards);
  const board = boards.find(board => board.isActive);

  const [editBoardModalOpen, setEditBoardModalOpen] = useState(false);
  
  return (
    <>
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <div className={'Board ' + (sidebarOpen ? 'Board-sidebar-open' : '')}>
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
      </div>
      {editBoardModalOpen &&
        <AddEditBoardModal
          type='Edit'
          setEditBoardModalOpen={setEditBoardModalOpen}
        />
      }
    </>
  );
}

export default Board;