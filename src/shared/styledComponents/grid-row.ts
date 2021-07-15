import styled from 'styled-components';

export const StyledGridRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  
  >* {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
  }
  
`;
