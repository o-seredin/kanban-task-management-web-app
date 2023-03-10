import iconHideSidebar from '../../image/icon-hide-sidebar.svg';
import iconShowSidebar from '../../image/icon-show-sidebar.svg';
import './SidebarBtn.scss';

function SidebarBtn({ sidebarOpen, setSidebarOpen }) {
  return (
    <button
      className={'SidebarBtn ' + (sidebarOpen ? 'SidebarBtn-hide' : 'SidebarBtn-show')}
      onClick={sidebarOpen ? () => setSidebarOpen(false) : () => setSidebarOpen(true)}
    >
      <img
        src={sidebarOpen ? iconHideSidebar : iconShowSidebar}
        alt={sidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
      ></img>
      {sidebarOpen ? 'Hide Sidebar' : ''}
    </button>
  );
}

export default SidebarBtn;