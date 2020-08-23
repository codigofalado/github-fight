import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import apolloClient from '../src/service/apolloClient';
import { RepositoryProvider } from '../src/hooks/repository';
import theme from '../src/styles/theme';

interface Props {
  element: React.ReactNode;
}

export const wrapRootElement: React.FC<Props> = ({ element }) => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={apolloClient}>
      <RepositoryProvider>{element}</RepositoryProvider>
    </ApolloProvider>
  </ThemeProvider>
);
