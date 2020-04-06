import styled from 'styled-components';

import Button from '~/components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 24px;
  max-width: 829px;
  margin: 0 auto;

  h1 {
    margin-top: 56px;
    text-align: center;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 80px 0 40px;

  width: 100%;
`;

export const NextButton = styled(Button)`
  padding: 0 24px;
`;
