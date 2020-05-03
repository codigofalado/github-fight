import React, { FC } from 'react';
import { ApolloProvider } from 'react-apollo';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';

import { client } from '../src/hooks/apollo';
import { RepositoryProvider } from '../src/hooks/repository';
import theme from '../src/styles/theme';

interface Props {
  element: React.ReactNode;
}

export const wrapRootElement: FC<Props> = ({ element }) => (
  <HelmetProvider>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <RepositoryProvider>{element}</RepositoryProvider>
      </ApolloProvider>
    </ThemeProvider>
  </HelmetProvider>
);
