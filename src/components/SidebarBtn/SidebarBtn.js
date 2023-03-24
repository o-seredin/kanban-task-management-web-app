import iconHideSidebar from '../../image/icon-hide-sidebar.svg';
import iconShowSidebar from '../../image/icon-show-sidebar.svg';
import './SidebarBtn.scss';

function SidebarBtn({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <button
      className={'SidebarBtn ' + (isSidebarOpen ? 'SidebarBtn-hide' : 'SidebarBtn-show')}
      onClick={isSidebarOpen
        ? () => setIsSidebarOpen(false)
        : () => setIsSidebarOpen(true)
      }
    >
      <img
        src={isSidebarOpen ? iconHideSidebar : iconShowSidebar}
        alt={isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
      ></img>
      {isSidebarOpen ? 'Hide Sidebar' : ''}
    </button>
  );
}

export default SidebarBtn;