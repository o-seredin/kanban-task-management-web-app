import icon from '../../image/icon-vertical-ellipsis.svg';
import './OptionBtn.scss';

function OptionBtn({ onClick }) {
  return (
    <div className='OptionBtn'>
      <img src={icon} alt='option' onClick={onClick}></img>
    </div>
  );
}

export default OptionBtn;