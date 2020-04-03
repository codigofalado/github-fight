import styled, { css } from 'styled-components';

interface Props {
  secundary?: boolean;
}

export const Container = styled.a<Props>`
  display: inline-block;
  cursor: pointer;

  height: 50px;
  line-height: 50px;
  padding: 0 24px;

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
    transform: scale(0.95) translateZ(0);
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
`;
