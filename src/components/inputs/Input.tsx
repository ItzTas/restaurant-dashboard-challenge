import React from "react";
import styled from "styled-components";

const InputStyle = styled.input``;

type InputProps = React.ComponentProps<typeof InputStyle>;

export default function Input({ ...props }: InputProps) {
    return <InputStyle {...props} />;
}
