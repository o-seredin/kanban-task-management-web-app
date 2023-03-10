import { useState } from 'react';
import AddEditBoardModal from '../AddEditBoardModal/AddEditBoardModal';
import Button from '../Button/Button';
import './BoardEmpty.scss';

function BoardEmpty() {
  const [addBoardModalOpen, setAddBoardModalOpen] = useState(false);
  
  return (
    <>
      <div className='BoardEmpty'>
        <div>
          <div>There are no boards available. Create a new board to get started</div>
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
        />}
    </>
  )
}

export default BoardEmpty;