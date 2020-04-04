import React, { FC, useState } from 'react';

import Layout from '~/Layout';

import SearchRepository from '~/components/SearchRepository';

import { Container, NextButton } from './styles';

const Battlefield: FC = () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <Layout>
      <Container>
        <h1>Select the battlefield repository</h1>
        <SearchRepository setDisabled={setDisabled} />
        <NextButton disabled={disabled}>Next</NextButton>
      </Container>
    </Layout>
  );
};

export default Battlefield;
