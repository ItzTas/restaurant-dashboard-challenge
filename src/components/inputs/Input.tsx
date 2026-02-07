import React from "react";
import styled from "styled-components";

const InputStyle = styled.input<{ height?: string; width?: string }>`
  height: ${(props) => props.height || "24px"};
  width: ${(props) => props.width || "184px"};
  background-color: transparent;
  border-radius: 8px;
  outline: none;
  border: none;
  font-size: 15px;
  line-height: 24px;
`;

type InputProps = React.ComponentProps<typeof InputStyle>;

export default function Input({ ...props }: InputProps) {
    return <InputStyle {...props} />;
}
