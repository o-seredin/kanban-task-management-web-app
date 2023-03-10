import './OptionMenu.scss';

function OptionMenu({ type, setEditTaskModalOpen, setEditBoardModalOpen, setDeleteModalOpen }) {
  return (
    <div className='OptionMenu'>
      <div
        className='OptionMenu-edit'
        onClick={type === 'Task' ? () => setEditTaskModalOpen(true) : () => setEditBoardModalOpen(true)}
      >Edit {type}</div>
      <div
        className='OptionMenu-delete'
        onClick={() => setDeleteModalOpen(true)}
      >Delete {type}</div>
    </div>
  );
}

export default OptionMenu;