import React, { useState } from 'react';

import Button from '~/components/Button';
import Layout from '~/components/Layout';
import SearchRepository from '~/components/SearchRepository';

import { Container } from './styles';
import { ButtonGroup } from '~/styles/button';

const Battlefield: React.FC = () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <Layout title="Battlefield">
      <Container>
        <h1>Select the battlefield repository</h1>
        <SearchRepository setDisabled={setDisabled} />
        <ButtonGroup>
          <Button to="/">Back</Button>
          <Button to="/fighters" disabled={disabled}>
            Next
          </Button>
        </ButtonGroup>
      </Container>
    </Layout>
  );
};

export default Battlefield;
