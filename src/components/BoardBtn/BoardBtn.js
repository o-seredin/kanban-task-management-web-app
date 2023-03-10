import iconBoard from '../../image/icon-board.svg';
import './BoardBtn.scss';

function BoardBtn({ type, board, index, onClick, className }) {
  return (
    <button
      className={'BoardBtn ' + className}
      onClick={onClick}
      key={index}
    >
      <img src={iconBoard} alt='Board'></img>
      {type === 'new' ? '+ Create New Board' : board.name}
    </button>
  );
}

export default BoardBtn;