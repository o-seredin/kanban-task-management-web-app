import './Modal.scss';

function Modal({ children, onClick }) {
  return (
    <div className='Modal-container' onClick={onClick}>
      <div className='Modal-window'>{children}</div>
    </div>
  );
}

export default Modal;