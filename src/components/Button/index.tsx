import React, { FC } from 'react';

import { Container, Props } from './styles';

const Button: FC<Props> = ({
  children,
  className,
  secundary,
  disabled,
  to,
}) => (
  <Container
    className={className}
    secundary={secundary}
    disabled={disabled}
    to={to}
  >
    {children}
  </Container>
);

export default Button;
