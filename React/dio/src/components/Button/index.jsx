//exporta para ser global
//passar propriedades como param
// export default function Button(props) {
//   //const calc 1 + 1;

//   //fazer a desestruturação - também pode ser passado direto o title
//   const { title } = props;
//   return <button>{title}</button>;
// }

import React from 'react';

import { ButtonContainer } from "./styles";

const Button = ({title, variant = "primary", onClick}) => {
  return (
    <ButtonContainer variant={variant} onclick={onClick}>
      {title}
    </ButtonContainer>
  );
};

export { Button };
