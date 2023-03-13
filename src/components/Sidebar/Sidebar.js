import { useState } from 'react';
import AddEditBoardModal from '../AddEditBoardModal/AddEditBoardModal';
import SidebarBtn from '../SidebarBtn/SidebarBtn';
import logo from '../../image/logo.svg';
import BoardsMenu from '../BoardsMenu/BoardsMenu';
import './Sidebar.scss';

function Sidebar({ sidebarOpen, setSidebarOpen, darkMode, setDarkMode }) {
  const [addBoardModalOpen, setAddBoardModalOpen] = useState(false);
  
  return (
    <>
      <div className={'Sidebar ' + (!sidebarOpen ? 'Sidebar-hidden' : '')}>
        <div className='Sidebar-wrapper'>
          <div className='Sidebar-logo'>
            <img className='Sidebar-logo-img' src={logo} alt='logo'></img>
            <div className='Sidebar-logo-text'>kanban</div>
          </div>
          <BoardsMenu
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            setAddBoardModalOpen={setAddBoardModalOpen}
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