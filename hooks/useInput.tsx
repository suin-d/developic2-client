import { SetStateAction, useState } from 'react';

export default function useInput(
  initialState = ''
): [
  string,
  (e: { target: { value: SetStateAction<string> } }) => void,
  React.Dispatch<React.SetStateAction<string>>
] {
  const [value, setValue] = useState(initialState);
  const onChange = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value);
  };
  return [value, onChange, setValue];
}
