import styled from 'styled-components';

import card from '~/styles/card';

export const Container = styled(card).attrs({
  as: 'li',
})`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 24px 32px;
  margin: 0;

  &:first-of-type {
    margin-top: 64px;
  }

  & + & {
    margin-top: 32px;
  }

  img {
    width: 80px;
    height: 80px;

    margin-right: 32px;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.colors.active};
  }

  h2 {
    font-size: 2.4rem;
  }

  p {
    margin: 8px 32px 0 0;
    color: ${({ theme }) => theme.colors.secundaryText};
  }

  button {
    margin-left: auto;
  }
`;
