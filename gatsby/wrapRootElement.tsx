import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import { client } from '../src/hooks/apollo';
import { RepositoryProvider } from '../src/hooks/repository';
import theme from '../src/styles/theme';

interface Props {
  element: React.ReactNode;
}

export const wrapRootElement: React.FC<Props> = ({ element }) => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <RepositoryProvider>{element}</RepositoryProvider>
    </ApolloProvider>
  </ThemeProvider>
);
