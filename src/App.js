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

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={'App ' + (darkMode ? 'dark' : 'light')}>
      {boards.length > 0 ? (
        <>
          <Header
            sidebarOpen={sidebarOpen}
          />
          <Board
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </>
      ) : (
        <BoardEmpty/>
      )}
    </div>
  );
}

export default App;