import React from 'react';
import { CalcOperationTypeEnum } from '~/core/enums/calculator/calc-operation-type.enum';
import { StyledGridRow } from '~/shared/styledComponents/grid-row';
import { StyledGridColumn } from '~/shared/styledComponents/grid-column';

import CalculatorDisplay from './components/display';
import useCalc from './hooks/useCalc';
import { 
  StyledCalculatorContainer,
  StyledWrapper,
  StyledButton,
  StyledActionButton
} from './styles';

const Calculator: React.FC = () => {
  const {
    displayText,
    displayOperationText,
    handleDisplayText,
    handleActionType,
    handleResult,
    resetValues,
  } = useCalc();

  const clearNumber = (): void => {
    const num = displayText.length - 1 > 0 ? displayText.slice(0, displayText.length -1) : '0';
    handleDisplayText(num, true);
  }

  return (
    <StyledCalculatorContainer>
      <StyledWrapper>
        <CalculatorDisplay displayText={displayText} displayOperationText={displayOperationText}/>
        <StyledGridRow>
          <StyledGridColumn padding={false}>
            <StyledButton onClick={clearNumber}>LIMPAR</StyledButton>
          </StyledGridColumn>
          <StyledGridColumn padding={false}>
            <StyledButton onClick={resetValues}>APAGAR</StyledButton>
          </StyledGridColumn>
        </StyledGridRow>

        <StyledGridRow>
          <StyledGridColumn mobile={9} padding={false}>
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
          </StyledGridColumn>
          <StyledGridColumn mobile={3} padding={false}>
            <StyledGridRow>
              <StyledGridColumn mobile={12} padding={false}>
                <StyledActionButton onClick={() => false}>{CalcOperationTypeEnum.Sum}</StyledActionButton>
              </StyledGridColumn>
              <StyledGridColumn mobile={12} padding={false}>
                <StyledActionButton onClick={() => false}>{CalcOperationTypeEnum.Subtraction}</StyledActionButton>
              </StyledGridColumn>
              <StyledGridColumn mobile={12} padding={false}>
                <StyledActionButton onClick={() => false}>{CalcOperationTypeEnum.Multiplication}</StyledActionButton>
              </StyledGridColumn>
              <StyledGridColumn mobile={12} padding={false}>
                <StyledActionButton onClick={() => false}>{CalcOperationTypeEnum.Division}</StyledActionButton>
              </StyledGridColumn>
            </StyledGridRow>
          </StyledGridColumn>
        </StyledGridRow>

        <div>
          <button 
            onClick={() => {
              handleActionType(CalcOperationTypeEnum.Sum)
            }
          }>Acao</button>
        </div>
      </StyledWrapper>
    </StyledCalculatorContainer>
  )

};

export default Calculator;
