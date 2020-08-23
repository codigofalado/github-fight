import React from 'react';

import SEO from '~/components/SEO';

import GlobalStyle from '~/styles/global';

interface Props {
  title: string;
}

const Layout: React.FC<Props> = ({ children, title }) => (
  <>
    <GlobalStyle />
    <SEO title={title} />
    {children}
  </>
);

export default Layout;
