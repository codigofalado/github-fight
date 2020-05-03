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

export const Podium = styled.ol`
  display: grid;
  grid-template-columns: repeat(3, auto);
  position: relative;

  max-width: 611px;
  margin: 30px auto 60px auto;

  li {
    font-size: 1.8rem;
    text-align: center;
    font-weight: 700;

    strong {
      display: block;
      margin-bottom: 8px;
      color: ${({ theme }) => theme.colors.active};
    }
  }

  li:nth-of-type(1) {
    grid-column: 2/2;
  }

  li:nth-of-type(2) {
    grid-column: 1/1;
  }

  li:nth-of-type(3) {
    grid-column: 3/3;
  }

  &::after {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.colors.secundaryText};

    left: 0;
    bottom: -30px;

    height: 2px;
    width: 100%;
    border-radius: 1px;
  }
`;

export const Rank = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 64px;
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

  margin-top: 32px;

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
