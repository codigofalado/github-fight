import styled, { css } from 'styled-components';

import button, { ButtonProps } from '~/styles/button';
import card from '~/styles/card';

export const Container = styled(card)`
  margin-bottom: 0;

  div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      height: 44px;
      outline-color: ${({ theme }) => theme.colors.active};

      border: 1px solid ${({ theme }) => theme.colors.secundaryActive};
      border-radius: 4px;

      padding: 0 16px;
      margin-right: 51px;

      width: 100%;
      max-width: 475px;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.primaryText};

      ::placeholder {
        color: ${({ theme }) => theme.colors.secundaryText};
      }

      &:hover {
        outline: none;
        border-color: ${({ theme }) => theme.colors.active};
      }
    }
  }
`;

export const SearchButton = styled.button.attrs({
  type: 'button',
})<ButtonProps>`
  ${button}

  display: flex;
  align-items: center;
  justify-content: center;

  height: 44px;
  width: 44px;
  min-width: 44px;

  background: ${({ theme }) => theme.colors.secundaryActive};
  border: none;

  ${({ disabled, theme }) =>
    disabled &&
    css`
      color: ${theme.colors.background};
      background: ${theme.colors.secundaryText};

      pointer-events: none;
      box-shadow: none;
    `};
`;
