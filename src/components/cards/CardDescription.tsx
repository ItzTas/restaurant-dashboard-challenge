import React from "react";
import styled from "styled-components";

const Description = styled.div<{ $mt?: string }>`
  white-space: nowrap;
  gap: 0.125rem;
  display: flex;
  flex-direction: column;
  margin-top: ${({ $mt }) => $mt};

  & * {
    font-size: 0.75rem;
    line-height: 1.33;
  }
`;

type Props = React.ComponentProps<typeof Description>;

export default function CardDescription({ children, ...props }: Props) {
    return <Description {...props}>{children}</Description>;
}
