import React from 'react';

import { StyledDisplay } from './styles';

type Props = {
  displayText: string
  displayOperationText: string
};

const CalculatorDisplay: React.FC<Props> = ({displayText, displayOperationText}) => {
  return (
    <StyledDisplay>
        <small>{displayOperationText}</small>
        <div>{displayText}</div>
    </StyledDisplay>
  )
};

export default CalculatorDisplay;
