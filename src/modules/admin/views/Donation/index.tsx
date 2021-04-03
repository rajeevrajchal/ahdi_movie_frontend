import React from 'react';
import ListDonation from './components/listDonation';

const Donation = () => {
  return (
    <div className="mt-lg">
      <div className="label ml-xl">
        <h3>List of donation provided</h3>
      </div>
      <div className="mt-lg">
        <ListDonation />
      </div>
    </div>
  );
};

export default Donation;
