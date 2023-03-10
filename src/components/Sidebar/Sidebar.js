import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBoardActive } from '../../store/boardsSlice';
import AddEditBoardModal from '../AddEditBoardModal/AddEditBoardModal';
import BoardBtn from '../BoardBtn/BoardBtn';
import SidebarBtn from '../SidebarBtn/SidebarBtn';
import ModeButton from '../ModeBtn/ModeBtn';
import logo from '../../image/logo.svg';
import './Sidebar.scss';

function Sidebar({ sidebarOpen, setSidebarOpen, darkMode, setDarkMode }) {
  const dispatch = useDispatch();
  const boards = useSelector(state => state.boards);

  const [addBoardModalOpen, setAddBoardModalOpen] = useState(false);
  
  return (
    <>
      <div className={'Sidebar ' + (!sidebarOpen ? 'Sidebar-hidden' : '')}>
        <div className='Sidebar-wrapper'>
          <div className='Sidebar-logo'>
            <img className='Sidebar-logo-img' src={logo} alt='logo'></img>
            <div className='Sidebar-logo-text'>kanban</div>
          </div>
          <div className='Sidebar-boards-text'>ALL BOARDS ({boards.length})</div>
          {boards.map((board, index) => {
            return (
              <BoardBtn
                className={board.isActive ? 'BoardBtn-active' : ''}
                board={board}
                index={index}
                key={index}
                onClick={() => dispatch(setBoardActive({ index }))}
              />
            );
          })}
          <BoardBtn
            type='new'
            onClick={() => setAddBoardModalOpen(true)}
          />
          <ModeButton
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </div>
      </div>
      <SidebarBtn
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
      {addBoardModalOpen &&
        <AddEditBoardModal
          type='Add New'
          setAddBoardModalOpen={setAddBoardModalOpen}
        />
      }
    </>
  );
}

export default Sidebar;