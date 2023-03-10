import './NewColumnBtn.scss';

function NewColumnBtn({ setEditBoardModalOpen }) {
  return (
    <button
      className='NewColumnBtn'
      onClick={() => setEditBoardModalOpen(true)}
    >+ New Column</button>
  );
}

export default NewColumnBtn;