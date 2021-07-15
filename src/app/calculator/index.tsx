import React from 'react';
import { StyledGridRow } from '~/shared/styledComponents/grid-row';
import { StyledGridColumn } from '~/shared/styledComponents/grid-column';

import CalculatorDisplay from './components/display';
import CalculatorKeyBoardTop from './components/keyboard/top';
import CalculatorKeyBoardNumbers from './components/keyboard/numbers';
import CalculatorKeyBoardActions from './components/keyboard/actions';

import useCalc from './hooks/useCalc';
import {  StyledCalculatorContainer, StyledWrapper } from './styles';

const Calculator: React.FC = () => {
  const {
    displayText,
    displayOperationText,
    handleDisplayText,
    handleActionType,
    handleResult,
    resetValues,
  } = useCalc();

  return (
    <StyledCalculatorContainer>
      <StyledWrapper>
        <CalculatorDisplay displayText={displayText} displayOperationText={displayOperationText}/>
        <CalculatorKeyBoardTop 
          displayText={displayText}
          handleDisplayText={(value, erase) => handleDisplayText(value, erase)}
          resetValues={() => resetValues()}
        />
        <StyledGridRow>
          <StyledGridColumn mobile={9} padding={false}>
            <CalculatorKeyBoardNumbers 
              handleDisplayText={(value, erase = false) => handleDisplayText(value, erase)}
              handleResult={(pauseCalculation) => handleResult(pauseCalculation)}
            />
          </StyledGridColumn>
          <StyledGridColumn mobile={3} padding={false}>
            <CalculatorKeyBoardActions handleActionType={(action) => handleActionType(action)} />
          </StyledGridColumn>
        </StyledGridRow>
      </StyledWrapper>
    </StyledCalculatorContainer>
  )
};

export default Calculator;
