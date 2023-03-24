import './Button.scss';

function Button({ type, value, onClick }) {
  return (
    <button
      className={'Button ' +
        (type === 'violet' ? 'Button-violet' : '') +
        (type === 'red' ? 'Button-red' : '')
      }
      onClick={onClick}
    >{value}</button>
  );
}

export default Button;