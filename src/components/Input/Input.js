import { useEffect, useState } from 'react';
import iconCross from '../../image/icon-cross.svg';
import './Input.scss';

function Input({ label, type, value, key, placeholder, onChange, onClick, setIsValid, onValidate, setOnValidate }) {
  const [invalid, setInvalid] = useState();
  
  function validate() {
    if(!value) {
      setInvalid(true);
      setIsValid(false);
    }
    if(value) {
      setInvalid(false);
      setIsValid(true);
    }
    setOnValidate(false);
  }

  useEffect(() => {
    if(onValidate) validate();
  }, [onValidate]);

  return (
    <>
      <label className='Input-label'>{label}</label>
      <div className='Input-container-1' key={key}>
        <div className='Input-container-2'>
          <input
            className={'Input ' + (invalid ? 'Input-red-border' : '')}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          ></input>
          {invalid && <span className='Input-error'>Can't be empty</span>}
        </div>
        {type === 'delete' ? <img className='Input-delete-btn' src={iconCross} alt='delete' onClick={onClick}></img> : ''}
      </div>
    </>
  );
}

export default Input;