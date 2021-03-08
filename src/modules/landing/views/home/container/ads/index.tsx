import React from 'react';
import './ads.scss';
import { ads } from '../../../../../../mock/ads';
import { $FIXME } from '../../../../../../constants';

const Ads = () => {
  return (
    <div className="ads-section">
      {ads.map((ad: $FIXME, key: number) => (
        <div className="ads flex " key={key}>
          <div className="ads-image">
            <img src={ad.image} alt="the ads" />
          </div>
          <div className="ads-content ml-xl align-center items-center">
            <h1>{ad.content}</h1>
            <div className="btn secondary w-30 mt-xl">
              <a href={ad.link} target="_blank" rel="noreferrer">
                Detail
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ads;
