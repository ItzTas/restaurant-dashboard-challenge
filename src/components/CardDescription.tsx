import React from "react";
import styled from "styled-components";

const Description = styled.div<{ $mt?: string }>`
  text-wrap: nowrap;
  gap: 2px;
  display: flex;
  flex-direction: column;
  margin-top: ${({ $mt }) => $mt};

  & * {
    font-size: 12px;
    line-height: 16px;
  }
`;

type Props = React.ComponentProps<typeof Description>;

export default function CardDescription({ children, ...props }: Props) {
    return <Description {...props}>{children}</Description>;
}
