import './Description.scss';

function Description({ onChange }) {
  return (
      <textarea 
        className='Description'
        onChange={onChange}
      ></textarea>
  );
}

export default Description;