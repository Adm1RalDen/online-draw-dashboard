import { ChangeEvent, FC } from "react";
import { FunctionWithParams } from "types";
import { Input, InputWrapper, Label, Span, Wrapper } from "./styles";

type RadioButtonTypes = {
  defaultValue: string;
  values: string[];
  name: string;
  onChange: FunctionWithParams<ChangeEvent<HTMLInputElement>>;
};

export const RadioButtons: FC<RadioButtonTypes> = ({
  defaultValue,
  name,
  onChange,
  values,
}) => {
  return (
    <InputWrapper>
      {values.map((value) => (
        <Wrapper key={`${value}_${Math.floor(Math.random() * 100)}`}>
          <Label htmlFor={`radio_color_${value}`}>
            {value}
            <Input
              type="radio"
              id={`radio_color_${value}`}
              name={name}
              value={value}
              defaultChecked={value === defaultValue}
              onChange={onChange}
            />
            <Span />
          </Label>
        </Wrapper>
      ))}
    </InputWrapper>
  );
};
