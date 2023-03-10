import iconLightTheme from '../../image/icon-light-theme.svg';
import iconDarkTheme from '../../image/icon-dark-theme.svg';
import './ModeBtn.scss';

function ModeBtn({ darkMode, setDarkMode }) {
  function handleClick() {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  }
  
  return (
    <div className='ModeBtn-container'>
      <img src={iconLightTheme} alt='Light Theme'></img>
      <div
        className={'ModeBtn ' + (darkMode ? 'ModeBtn-dark' : 'ModeBtn-ligth')}
        onClick={handleClick}
      >
        <div className='ModeBtn-circle'></div>
      </div>
      <img src={iconDarkTheme} alt='Dark Theme'></img>
    </div>
  );
}

export default ModeBtn;