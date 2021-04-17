import React, { useEffect } from 'react';
import { $FIXME } from '../../../constants';
import { Adsense } from '@ctrl/react-adsense';

const Demo = () => {
  const browser_window: $FIXME = window;
  useEffect(() => {
    (browser_window.adsbygoogle = browser_window.adsbygoogle || []).push({});
    console.log('DID IT!!');
  }, []);
  return (
    <div>
      <p>the first ads</p>
      <Adsense client="ca-pub-1234567890123456" slot="1234567890" />
      <p>the second ads</p>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', height: '300px', width: '100%' }}
        data-ad-client="ca-pub-1234567890123456"
        data-ad-slot="1234567890"
      />
      <p>the third ads</p>
    </div>
  );
};

export default Demo;
