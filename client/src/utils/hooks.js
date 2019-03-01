import { useState } from "react";

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: e => setValue(e.target.value)
  };
};

export const useCheckbox = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  return {
    type: "checkbox",
    checked: value,
    onChange: () => setValue(!value)
  };
};
