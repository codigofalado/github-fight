import React, { FC } from 'react';

import { Container, Props } from './styles';

const Button: FC<Props> = ({ children, secundary, disabled, to }) => (
  <Container secundary={secundary} disabled={disabled} to={to}>
    {children}
  </Container>
);

export default Button;
