import './Modal.scss';

function Modal({ children, onClick, hidden }) {
  return (
    <div className={'Modal-container ' + (hidden && 'Modal-hidden')} onClick={onClick}>
      <div className='Modal-window'>{children}</div>
    </div>
  );
}

export default Modal;