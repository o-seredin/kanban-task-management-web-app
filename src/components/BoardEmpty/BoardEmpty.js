import { useState } from 'react';
import AddEditBoardModal from '../AddEditBoardModal/AddEditBoardModal';
import Button from '../Button/Button';
import './BoardEmpty.scss';

function BoardEmpty({ type }) {
  const [addBoardModalOpen, setAddBoardModalOpen] = useState(false);
  
  return (
    <>
      <div className='BoardEmpty'>
        <div>
          <div>{type === 'edit'
            ? 'This board is empty. Create a new column to get started.'
            : 'There are no boards available. Create a new board to get started.'}</div>
          <Button
            value='+ Add New Board'
            onClick={() => setAddBoardModalOpen(true)}
          />
        </div>
      </div>
      {addBoardModalOpen &&
        <AddEditBoardModal
          type='Add New'
          setAddBoardModalOpen={setAddBoardModalOpen}
        />
      }
    </>
  )
}

export default BoardEmpty;