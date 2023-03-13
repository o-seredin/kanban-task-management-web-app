import iconCross from '../../image/icon-cross.svg';
import './Input.scss';

function Input({ type, value, key, placeholder, onChange, onClick, isValid }) {
  return (
    <div className='Input-container-1' key={key}>
      <div className='Input-container-2'>
        <input
          className={'Input ' + (!isValid && !value ? 'Input-red-border' : '')}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        ></input>
        {!isValid && !value && <span className='Input-error'>Can't be empty</span>}
      </div>
      {type === 'delete' ? <img className='Input-delete-btn' src={iconCross} alt='delete' onClick={onClick}></img> : ''}
    </div>
  );
}

export default Input;