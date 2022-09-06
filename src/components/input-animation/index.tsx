import { FC } from "react";
import { FunctionWithParams } from "types";

import { Input } from "components/input";

import { ErrorSpan, InputWrapper } from "./styles";

type InputProps = {
  margin?: string;
  type: string;
  label: string;
  value: any;
  name: string;
  error?: string;
  id?: string;
  onChange?: FunctionWithParams<any>;
  onBlur?: FunctionWithParams<any>;
  disabled?: boolean;
};

export const InputAnimation: FC<InputProps> = ({ label, ...rest }) => {
  return (
    <InputWrapper
      isError={!!rest.error}
      hasValue={!!rest.value}
      margin={rest.margin}
    >
      <Input {...rest} type={rest.type} />
      <label>{label}</label>
      {rest.error && <ErrorSpan title={rest.error}></ErrorSpan>}
    </InputWrapper>
  );
};
