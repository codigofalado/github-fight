import React, { FC } from 'react';

import Button from '~/components/Button';

import logo from '~/assets/logo.svg';

import { Container } from './styles';

const Home: FC = () => (
  <Container>
    <img src={logo} alt="github fight logo" />

    <div>
      <Button>Start Battle</Button>
      <Button secundary>Know more</Button>
    </div>
  </Container>
);

export default Home;
