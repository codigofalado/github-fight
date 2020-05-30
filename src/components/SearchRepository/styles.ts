import styled, { css, keyframes } from 'styled-components';

import button, { ButtonProps } from '~/styles/button';
import card from '~/styles/card';

export const Container = styled(card)`
  margin-bottom: 0;

  form {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    div {
      width: 100%;
      max-width: 475px;
      margin-right: 50px;

      input {
        height: 44px;
        outline-color: ${({ theme }) => theme.colors.active};

        border: 1px solid ${({ theme }) => theme.colors.secundaryActive};
        border-radius: 4px;

        padding: 0 16px;

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

      p {
        color: ${({ theme }) => theme.colors.error};
        margin-top: 8px;
        font-size: 1.4rem;
      }
    }
  }
`;

interface SearchButtonProps extends ButtonProps {
  isLoading?: boolean;
}

const roulette = keyframes`
  from {
    transform: rotate(0) translateZ(0);
  }
  to {
    transform: rotate(360deg) translateZ(0);
  }
`;

export const SearchButton = styled.button.attrs({
  type: 'submit',
})<SearchButtonProps>`
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

  ${({ isLoading }) =>
    isLoading &&
    css`
      svg {
        animation: ${roulette} 1.2s linear infinite;
      }
    `};
`;
