import React from "react";

import { InputContainer, IconCotainer, InputText } from "./styles";

const Input = ({ leftIcon, name, ...rest }) => {
  return (
    <InputContainer>
      {leftIcon ? <IconCotainer>{leftIcon}</IconCotainer> : null}
      <InputText {...rest} />
    </InputContainer>
  );
};

export { Input };
