import React, { FC } from 'react';

import Layout from '~/Layout';

import SearchRepository from '~/components/SearchRepository';

import { Container } from './styles';

const Battlefield: FC = () => (
  <Layout>
    <Container>
      <h1>Select the battlefield repository</h1>
      <SearchRepository />
    </Container>
  </Layout>
);

export default Battlefield;
