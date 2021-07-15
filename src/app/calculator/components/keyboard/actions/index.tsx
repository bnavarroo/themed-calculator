import React from 'react';
import { CalcOperationTypeEnum } from '~/core/enums/calculator/calc-operation-type.enum';
import { StyledGridRow } from '~/shared/styledComponents/grid-row';
import { StyledGridColumn } from '~/shared/styledComponents/grid-column';

import { StyledActionButton } from '../../../styles';

type Props = {
  handleActionType: (action: CalcOperationTypeEnum) => void,
}

const CalculatorKeyBoardActions: React.FC<Props> = ({ handleActionType }) => (
  <StyledGridRow>
    <StyledGridColumn mobile={12} padding={false}>
      <StyledActionButton onClick={() => handleActionType(CalcOperationTypeEnum.Sum)}>{CalcOperationTypeEnum.Sum}</StyledActionButton>
    </StyledGridColumn>
    <StyledGridColumn mobile={12} padding={false}>
      <StyledActionButton onClick={() => handleActionType(CalcOperationTypeEnum.Subtraction)}>{CalcOperationTypeEnum.Subtraction}</StyledActionButton>
    </StyledGridColumn>
    <StyledGridColumn mobile={12} padding={false}>
      <StyledActionButton onClick={() => handleActionType(CalcOperationTypeEnum.Multiplication)}>{CalcOperationTypeEnum.Multiplication}</StyledActionButton>
    </StyledGridColumn>
    <StyledGridColumn mobile={12} padding={false}>
      <StyledActionButton onClick={() => handleActionType(CalcOperationTypeEnum.Division)}>{CalcOperationTypeEnum.Division}</StyledActionButton>
    </StyledGridColumn>
  </StyledGridRow>
);

export default CalculatorKeyBoardActions;
