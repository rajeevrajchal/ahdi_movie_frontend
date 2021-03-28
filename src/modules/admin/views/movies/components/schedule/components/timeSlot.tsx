import React, { FC } from 'react';
import './timeslot.scss';
import { $FIXME } from '../../../../../../../constants';
interface TimeSlotInterface {
  schedule: $FIXME;
}
const TimeSlot: FC<TimeSlotInterface> = ({ schedule }) => {
  const handleClick = () => {
    console.log('disabled');
  };
  return (
    <>
      <div className="s-item flex justify-between align-center items-center">
        <div className="label text-center">{schedule.slot}</div>
        <div className="actions">
          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={() => handleClick()}
          ></i>
        </div>
      </div>
    </>
  );
};

export default TimeSlot;

// <Modal title={'Are you sure to disable the slot.'}>
//   <div className="actions flex align-center items-center justify-between mt-lg">
//     <div className="btn primary" onClick={() => handleConfirm()}>
//       Confirm
//     </div>
//     <div
//         className="btn secondary"
//         onClick={() => dispatch(closeModal())}
//     >
//       Close
//     </div>
//   </div>
// </Modal>
