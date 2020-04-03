import React, { FC } from 'react';

import { Container } from './styles';

interface Props {
  secundary?: boolean;
}

const Button: FC<Props> = ({ children, secundary }) => (
  <Container secundary={secundary}>{children}</Container>
);

export default Button;
