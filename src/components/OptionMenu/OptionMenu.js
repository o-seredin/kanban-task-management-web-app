import { useEffect, useRef } from 'react';
import './OptionMenu.scss';

function OptionMenu({ type, setIsAddEditTaskModalOpen, setIsAddEditBoardModalOpen, setIsDeleteModalOpen, setIsOptionMenuOpen }) {
  const ref = useRef();
  
  useEffect(() => {
    window.onclick = (event) => {
      if (event.target.contains(ref.current) && event.target !== ref.current) {
        setIsOptionMenuOpen(false);
      }
    }
  }, []);
  
  return (
    <div className='OptionMenu' ref={ref}>
      <div
        className='OptionMenu-edit'
        onClick={type === 'Task'
          ? () => setIsAddEditTaskModalOpen(true)
          : () => setIsAddEditBoardModalOpen(true)
        }
      >Edit {type}</div>
      <div
        className='OptionMenu-delete'
        onClick={() => setIsDeleteModalOpen(true)}
      >Delete {type}</div>
    </div>
  );
}

export default OptionMenu;