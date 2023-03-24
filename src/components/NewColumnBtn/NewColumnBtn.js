import './NewColumnBtn.scss';

function NewColumnBtn({ setIsAddEditBoardModalOpen }) {
  return (
    <button
      className='NewColumnBtn'
      onClick={() => setIsAddEditBoardModalOpen(true)}
    >+ New Column</button>
  );
}

export default NewColumnBtn;