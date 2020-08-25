import styled from 'styled-components';

import button from '~/styles/button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 829px;
  margin: 0 auto;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 56px;

    width: 100%;
  }
`;

export const SelectAllButton = styled.button.attrs({
  type: 'button',
})`
  ${button}

  padding: 8px 8px;
`;
