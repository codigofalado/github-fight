import styled from 'styled-components';

export default styled.div`
  padding: 32px;
  margin: 64px 0 48px 0;

  width: 100%;
  max-width: 829px;

  border-radius: 4px;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: 0px 2px 10px ${({ theme }) => theme.colors.shadow};
`;
