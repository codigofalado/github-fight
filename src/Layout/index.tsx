import React, { FC } from 'react';

import SEO from '~/components/SEO';

import GlobalStyle from '~/styles/global';

const Layout: FC = ({ children }) => (
  <>
    <GlobalStyle />
    <SEO title="Home" />
    {children}
  </>
);

export default Layout;
