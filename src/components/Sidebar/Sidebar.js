import BoardsMenu from '../BoardsMenu/BoardsMenu';
import SidebarBtn from '../SidebarBtn/SidebarBtn';
import logo from '../../image/logo.svg';
import './Sidebar.scss';

function Sidebar({ isSidebarOpen, setIsSidebarOpen, isDarkTheme, setIsDarkTheme }) {
  return (
    <>
      <div className={'Sidebar ' + (!isSidebarOpen ? 'Sidebar-hidden' : '')}>
        <div className='Sidebar-wrapper'>
          <div className='Sidebar-logo-container'>
            <img className='Sidebar-logo-img' src={logo} alt='logo'></img>
            <div className='Sidebar-logo-text'>kanban</div>
          </div>
          <BoardsMenu
            isDarkTheme={isDarkTheme}
            setIsDarkTheme={setIsDarkTheme}
          />
        </div>
      </div>
      <SidebarBtn
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
}

export default Sidebar;