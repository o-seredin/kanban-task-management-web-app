import iconLightTheme from '../../image/icon-light-theme.svg';
import iconDarkTheme from '../../image/icon-dark-theme.svg';
import './ThemeBtn.scss';

function ThemeBtn({ isDarkTheme, setIsDarkTheme }) {
  function handleClick() {
    isDarkTheme ? setIsDarkTheme(false) : setIsDarkTheme(true);
  }
  
  return (
    <div className='ThemeBtn-container'>
      <img src={iconLightTheme} alt='Light Theme'></img>
      <div
        className={'ThemeBtn ' + (isDarkTheme ? 'ThemeBtn-dark' : 'ThemeBtn-ligth')}
        onClick={handleClick}
      >
        <div className='ThemeBtn-circle'></div>
      </div>
      <img src={iconDarkTheme} alt='Dark Theme'></img>
    </div>
  );
}

export default ThemeBtn;