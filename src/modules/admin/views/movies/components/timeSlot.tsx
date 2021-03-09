import React from 'react';

const TimeSlot = () => {
  const handleClick = () => {
    console.log('disabled');
  };
  return (
    <>
      <div className="schedule-item flex align-center items-center disabled">
        <div className="label text-center">
          <h3>9:00PM</h3>
        </div>
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
