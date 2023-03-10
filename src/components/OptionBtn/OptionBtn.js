import icon from '../../image/icon-vertical-ellipsis.svg';
import './OptionBtn.scss';

function OptionBtn({ onClick }) {
  return (
    <img className='OptionBtn' src={icon} alt='option' onClick={onClick}></img>
  );
}

export default OptionBtn;