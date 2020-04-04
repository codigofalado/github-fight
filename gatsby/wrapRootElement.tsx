import React, { FC } from 'react';
import { ApolloProvider } from 'react-apollo';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';

import { client } from '../src/context/ApolloContext';
import theme from '../src/styles/theme';

interface Props {
  element: React.ReactNode;
}

export const wrapRootElement: FC<Props> = ({ element }) => (
  <HelmetProvider>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>{element}</ApolloProvider>
    </ThemeProvider>
  </HelmetProvider>
);
