import React, { FC, useState } from 'react';

import Layout from '~/Layout';

import SearchRepository from '~/components/SearchRepository';

import { Container, ButtonGroup, NextButton } from './styles';

const Battlefield: FC = () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <Layout>
      <Container>
        <h1>Select the battlefield repository</h1>
        <SearchRepository setDisabled={setDisabled} />
        <ButtonGroup>
          <NextButton to="/">Back</NextButton>
          <NextButton to="/fighters" disabled={disabled}>
            Next
          </NextButton>
        </ButtonGroup>
      </Container>
    </Layout>
  );
};

export default Battlefield;
