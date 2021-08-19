import { useState } from 'react';
import { CustomMultiRadioBtnBox } from '../components/Input/styles';

type useRadioBtnPropsType = [checkRadioValue: string, renderChecks: () => JSX.Element];

export function useRadioButton(
  radiobuttonsList: string[],
  labelName: string,
  initialCheck: string
): useRadioBtnPropsType {
  const getDefaultRadiobuttons = () =>
    radiobuttonsList.map((radioBtn: string) => ({
      name: radioBtn,
      checked: false,
    }));

  const radioButtons = getDefaultRadiobuttons();

  const [checkRadioValue, setCheckRadioValue] = useState(initialCheck);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const selected = radioButtons.find(check => check.name === value);
    if (selected) {
      setCheckRadioValue(selected.name);
    }
  };

  const renderChecks = () => (
    <CustomMultiRadioBtnBox>
      {radioButtons.map((radioBtn, index) => (
        <label key={index} htmlFor={radioBtn.name}>
          <li key={index}>
            <input
              type="radio"
              name={labelName}
              id={radioBtn.name}
              value={radioBtn.name}
              checked={radioBtn.name === checkRadioValue}
              onChange={handleChange}
            />
            <span></span>
            {radioBtn.name}
          </li>
        </label>
      ))}
    </CustomMultiRadioBtnBox>
  );

  return [checkRadioValue, renderChecks];
}
