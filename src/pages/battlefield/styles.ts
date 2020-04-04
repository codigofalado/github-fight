import styled from 'styled-components';

import { SearchButton } from '~/components/SearchRepository/styles';

import { ButtonProps } from '~/styles/button';

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

export const NextButton = styled(SearchButton)<ButtonProps>`
  width: auto;
  min-width: auto;

  padding: 0 24px;
  margin-left: auto;
`;
