import React, { FC } from 'react';

import Button from '~/components/Button';

import logo from '~/assets/logo.svg';

import { Container, ExternalAnchor } from './styles';

const Home: FC = () => (
  <Container>
    <img src={logo} alt="github fight logo" />

    <div>
      <Button to="/battlefield">Start Battle</Button>
      <ExternalAnchor
        href="https://github.com/codigofalado/github-fight"
        target="_blank"
        rel="noopener noreferrer"
        secundary
      >
        Read more
      </ExternalAnchor>
    </div>
  </Container>
);

export default Home;
