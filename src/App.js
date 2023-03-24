import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBoardActive } from './store/boardsSlice';
import Header from './components/Header/Header';
import Board from './components/Board/Board';
import BoardEmpty from './components/BoardEmpty/BoardEmpty';
import './style/main.scss';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const boards = useSelector(state => state.boards);
  const board = boards.find(board => board.isActive);
  if (!board && boards.length > 0) dispatch(setBoardActive({ index: 0 }));

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  return (
    <div className={'App ' + (isDarkTheme ? 'dark' : 'light')}>
      {boards.length > 0 ? (
        <>
          <Header
            isSidebarOpen={isSidebarOpen}
            isDarkTheme={isDarkTheme}
            setIsDarkTheme={setIsDarkTheme}
          />
          <Board
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            isDarkTheme={isDarkTheme}
            setIsDarkTheme={setIsDarkTheme}
          />
        </>
      ) : (
        <BoardEmpty/>
      )}
    </div>
  );
}

export default App;