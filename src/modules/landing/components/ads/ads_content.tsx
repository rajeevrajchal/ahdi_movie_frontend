import React, { FC } from 'react';
import { Adsense } from '@ctrl/react-adsense';

interface AdsContentInterface {
  client_id?: string;
  slot_id?: string;
}

const AdsContent: FC<AdsContentInterface> = (props) => {
  const { client_id, slot_id } = props;
  return (
    <div
      className="second-ads"
      style={{
        width: '250px',
        height: '650px',
      }}
    >
      <Adsense
        client={client_id ?? 'ca-pub-4591861188995436'}
        slot={slot_id ?? '6710577704'}
        style={{
          display: 'inline-block',
          height: '100%',
          width: '100%',
          background: 'red',
        }}
        layout="in-article"
        format="fluid"
      />
    </div>
  );
};

export default AdsContent;
