import styled, { css } from 'styled-components';

import card from '~/styles/card';

interface Props {
  selected?: boolean;
}

export const Container = styled(card).attrs({
  as: 'li',
})<Props>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  border: 1px solid ${({ theme }) => theme.colors.card};
  padding: 22px 32px;
  margin: 0;

  transition: 0.2s ease;

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

  ${({ selected, theme }) =>
    selected &&
    css`
      border-color: ${theme.colors.active};

      button {
        background: ${theme.colors.active};
      }
    `}
`;
