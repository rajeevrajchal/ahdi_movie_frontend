import React from 'react';
import Head from '../components/partials/Head';
import { $CHILDREN, $FIXME } from '../constants';

interface LayoutInterface {
  children: $CHILDREN;
  title: string;
  description: string;
  keywords: $FIXME;
  type?: string;
  url?: string;
  image?: string;
  origin?: string;
}
const Layout: React.FC<LayoutInterface> = (props) => {
  const {
    children,
    title,
    description,
    keywords,
    type,
    url,
    origin,
    image,
  } = props;
  return (
    <>
      <Head
        title={title}
        description={description}
        keywords={keywords}
        // eslint-disable-next-line
        origin={origin}
        // eslint-disable-next-line
        image={image}
        // eslint-disable-next-line
        url={url}
        // eslint-disable-next-line
        type={type}
      />
      {children}
    </>
  );
};

export default Layout;
