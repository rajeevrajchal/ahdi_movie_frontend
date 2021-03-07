import React from 'react';
import { Helmet } from 'react-helmet';
import { appName } from '../../mock/systemInfo';
import { $FIXME } from '../../constants';

interface HeadInterface {
  title: string;
  description: string;
  keywords: $FIXME;
  type?: string;
  url?: string;
  image?: string;
  origin?: string;
}
const Head: React.FC<HeadInterface> = (props) => {
  // eslint-disable-next-line
  const { title, description, keywords, type, url, image, origin } = props;
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{`${title} ${title && '|'} ${appName} `}</title>
      <meta name="robots" content="index, follow" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta
        id="og-title"
        property="og:title"
        content={`${title} ${title && '|'} Monotice `}
      />
      <meta
        id="og-image"
        property="og:image"
        content="%PUBLIC_URL%/namelogo.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        id="og-description"
        property="og:description"
        content={description}
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Helmet>
  );
};

export default Head;
