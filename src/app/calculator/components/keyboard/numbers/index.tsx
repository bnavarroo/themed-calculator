import React from 'react';
import { StyledGridRow } from '~/shared/styledComponents/grid-row';
import { StyledGridColumn } from '~/shared/styledComponents/grid-column';

import { StyledButton } from '../../../styles';

type Props = {
  handleDisplayText: (value: string, erase?: boolean) => void,
  handleResult: (pauseCalculation: boolean, valueToOperation?: number) => void,
}

const CalculatorKeyBoardNumbers: React.FC<Props> = ({ handleDisplayText, handleResult }) => (
  <StyledGridRow>
  {
      [...Array(10)].map((v, i) => {
        if(i > 0) {
          return (
            <StyledGridColumn key={i} mobile={4} padding={false}>
              <StyledButton onClick={() => handleDisplayText(`${i}`)}>{i}</StyledButton>
            </StyledGridColumn>
          )
        }
        return false;
      })
    }
    <StyledGridColumn mobile={4} padding={false}>
      <StyledButton onClick={() => handleDisplayText('0')}>0</StyledButton>
    </StyledGridColumn>
    <StyledGridColumn mobile={4} padding={false}>
      <StyledButton onClick={() => handleDisplayText('.')}>.</StyledButton>
    </StyledGridColumn>
    <StyledGridColumn mobile={4} padding={false}>
      <StyledButton onClick={() => handleResult(true)}>=</StyledButton>
    </StyledGridColumn>
  </StyledGridRow>
);

export default CalculatorKeyBoardNumbers;
