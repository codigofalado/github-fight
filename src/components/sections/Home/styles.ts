import styled from 'styled-components';

import button, { ButtonProps } from '~/styles/button';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  min-height: 100vh;

  div {
    display: flex;
    align-items: center;
    margin-top: 200px;

    a:first-of-type {
      margin-right: 96px;
    }
  }
`;

export const ExternalAnchor = styled.a<ButtonProps>`
  display: inline-block;

  height: 50px;
  line-height: 50px;
  padding: 0 24px;

  ${button}
`;
