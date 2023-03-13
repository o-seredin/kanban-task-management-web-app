import { useSelector, useDispatch } from 'react-redux';
import { setBoardActive } from '../../store/boardsSlice';
import BoardBtn from '../BoardBtn/BoardBtn';
import ModeBtn from '../ModeBtn/ModeBtn';
import './BoardsMenu.scss';

function BoardsMenu({ darkMode, setDarkMode, setAddBoardModalOpen }) {
  const dispatch = useDispatch();
  const boards = useSelector(state => state.boards);

  return (
    <div className='BoardsMenu-container'>
      <div className='BoardsMenu'>
        <div className='BoardsMenu-boards-text'>ALL BOARDS ({boards.length})</div>
        {boards.map((board, index) => {
          return (
            <BoardBtn
              className={board.isActive && 'BoardBtn-active'}
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
        <ModeBtn
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>
    </div>
  );
}

export default BoardsMenu;