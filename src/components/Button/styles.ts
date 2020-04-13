import styled from 'styled-components';

import { Link } from 'gatsby';

import button, { ButtonProps } from '~/styles/button';

export interface Props extends ButtonProps {
  to: string;
  className?: string;
}

export const Container = styled(Link)<Props>`
  display: inline-block;

  height: 50px;
  line-height: 50px;
  padding: 0 24px;

  ${button}
`;
