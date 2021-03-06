import styled, { css } from 'styled-components';

export interface ButtonProps {
  secundary?: boolean;
  disabled?: boolean;
}

export default css<ButtonProps>`
  cursor: pointer;
  font-weight: bold;
  font-size: 1.6rem;

  color: ${({ theme }) => theme.colors.background};
  background: ${({ theme }) => theme.colors.active};

  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.active};
  box-shadow: 0 2px 10px ${({ theme }) => theme.colors.shadow};

  transition: 0.2s ease;
  text-transform: uppercase;
  user-select: none;

  &:hover {
    background: ${({ theme }) => theme.colors.activeDark};
    border-color: ${({ theme }) => theme.colors.activeDark};
  }

  &:active {
    transform: scale(0.92) translateZ(0);
  }

  ${({ secundary, theme }) =>
    secundary &&
    css`
      color: ${theme.colors.active};
      background: ${theme.colors.background};

      &:hover {
        color: ${theme.colors.background};
      }
    `};

  ${({ disabled, theme }) =>
    disabled &&
    css`
      color: ${theme.colors.background};
      background: ${theme.colors.secundaryText};
      border-color: ${theme.colors.secundaryText};

      pointer-events: none;
      box-shadow: none;
    `};

  ${({ secundary, disabled, theme }) =>
    disabled &&
    secundary &&
    css`
      color: ${theme.colors.secundaryText};
      background: ${theme.colors.background};
      border-color: ${theme.colors.secundaryText};

      pointer-events: none;
      box-shadow: none;
    `};
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 80px 0 40px;

  width: 100%;
`;
