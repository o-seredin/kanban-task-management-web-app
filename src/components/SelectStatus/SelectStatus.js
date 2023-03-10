import './SelectStatus.scss';

function SelectStatus({ value, onChange, children }) {
  return (
    <select className='SelectStatus' value={value} onChange={onChange}>{children}</select>
  );
}

export default SelectStatus;