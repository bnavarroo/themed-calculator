import React from 'react';
import { StyledGridRow } from '~/shared/styledComponents/grid-row';
import { StyledGridColumn } from '~/shared/styledComponents/grid-column';

import { StyledButton } from '../../../styles';

type Props = {
  displayText: string,
  handleDisplayText: (value: string, erase?: boolean) => void,
  resetValues: () => void
}

const CalculatorKeyBoardTop: React.FC<Props> = ({ displayText, handleDisplayText, resetValues }) => {
  
  const clearNumber = (): void => {
    const num = displayText.length - 1 > 0 ? displayText.slice(0, displayText.length -1) : '0';
    handleDisplayText(num, true);
  }

  return (
    <StyledGridRow>
      <StyledGridColumn padding={false}>
        <StyledButton onClick={clearNumber}>LIMPAR</StyledButton>
      </StyledGridColumn>
      <StyledGridColumn padding={false}>
        <StyledButton onClick={resetValues}>APAGAR</StyledButton>
      </StyledGridColumn>
    </StyledGridRow>
  )
};

export default CalculatorKeyBoardTop;
