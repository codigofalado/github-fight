import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 120px;
    height: 120px;
    margin-top: 48px;

    border-radius: 50%;
    border: 4px solid ${({ theme }) => theme.colors.secundaryActive};
  }

  h2 {
    font-size: 2.4rem;
    margin: 24px 0 8px;
  }

  p {
    max-width: 433px;
    text-align: center;

    color: ${({ theme }) => theme.colors.secundaryText};
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    margin-top: 40px;

    li {
      strong {
        font-weight: 400;
        margin-left: 16px;

        color: ${({ theme }) => theme.colors.secundaryActive};
      }
    }

    li + li {
      position: relative;
      margin-left: 64px;

      &::before {
        content: '';
        position: absolute;

        width: 1px;
        height: 100%;

        top: 0;
        left: -32px;
        transform: translateX(-50%);

        background: ${({ theme }) => theme.colors.active};
      }
    }
  }
`;
