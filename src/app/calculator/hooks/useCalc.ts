import { useState, useEffect } from 'react';
import { CalcOperationTypeEnum } from '~/core/enums/calculator/calc-operation-type.enum';

type useCalcResponse = {
  displayText: string,
  displayOperationText: string,
  handleDisplayText: (value: string, erase?: boolean) => void,
  handleActionType: (action: CalcOperationTypeEnum) => void,
  handleResult: (pauseCalculation: boolean, valueToOperation?: number) => void,
  resetValues: () => void
};

function useCalc(): useCalcResponse {
  const [displayText, setDisplayText] = useState<string>('');
  const [resetDisplayText, setResetDisplayText] = useState<boolean>(true);
  const [valueInMemory, setValueInMemory] = useState<number>(0);
  const [actionType, setActionType] = useState<CalcOperationTypeEnum | null>();
  const [result, setResult] = useState<number>(0);

  // Seta texto do visor "principal"
  const handleDisplayText = (value: string, erase: boolean = false) : void => {
    const newValue = resetDisplayText || erase || (parseFloat(displayText) === 0)
      ? `${value}`
      : `${displayText}${value}`;

    setDisplayText(newValue);
    setResetDisplayText(false);
  }

  // Seta valores para a conta matematica
  const handleValues = (value: number, first: boolean = false) : void => {
    if(first || valueInMemory === 0) {
      setValueInMemory(value);
    } else {
      handleResult(false, value);
    }
  }

  // Calcula o resultado e atualiza display e valor da memoria
  const handleResult = (pauseCalculation: boolean, valueToOperation?: number) : void => {
    const result = valueInMemory + (valueToOperation ?? parseFloat(displayText));
    setResult(result);
    setDisplayText(result.toString());
    setValueInMemory(pauseCalculation ? 0 : result);
    setResetDisplayText(true);

    if(pauseCalculation) setActionType(null);
  }

  // Define a operacao: adicao, subtracao...
  const handleActionType = (action: CalcOperationTypeEnum) : void => {
    setActionType(action);
    handleValues(parseFloat(displayText));
  }

  // Resetar os valores para reinicio do processo
  const resetValues = () : void => {
    setResult(0);
    setValueInMemory(0);
    setActionType(null);
  }

  // Atualiza o visor de operacao sempre que os valores sao alterados
  useEffect(() => {
    if(result > 0) {
      setDisplayText(result.toString());  
    } else {
      setResetDisplayText(true);
      setDisplayText(valueInMemory.toString());  
    }
  }, [result, valueInMemory]);

  return {
    displayText,
    displayOperationText: (valueInMemory && actionType) ? `${valueInMemory} ${actionType ?? ''}` : '',
    handleDisplayText,
    handleActionType,
    handleResult,
    resetValues
  };
}

export default useCalc;
