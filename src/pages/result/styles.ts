import styled from 'styled-components';

import card from '~/styles/card';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  div {
    margin: 32px 0;
  }

  h1 {
    font-size: 3.6rem;
    margin-bottom: 8px;
  }

  h2 {
    color: ${({ theme }) => theme.colors.secundaryText};
    font-size: 2.4rem;
  }

  img {
    width: 80px;
    height: 80px;
  }
`;

export const Podium = styled.section``;

export const Rank = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Position = styled(card).attrs({
  as: 'li',
})`
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

  > span {
    font-size: 4.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.active};
  }

  img {
    width: 80px;
    height: 80px;
    min-width: 80px;

    margin: 0 32px;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.colors.active};
  }

  h3 {
    font-size: 2.4rem;
  }

  p {
    margin: 8px 32px 0 0;
    color: ${({ theme }) => theme.colors.secundaryText};
  }

  div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-left: auto;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.active};
  }

  &:nth-child(even) {
    > span,
    div:nth-of-type(2) {
      color: ${({ theme }) => theme.colors.secundaryActive};
    }

    img {
      border-color: ${({ theme }) => theme.colors.secundaryActive};
    }
  }
`;
