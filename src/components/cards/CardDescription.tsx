import styled from "styled-components";

const CardDescription = styled.div<{ $mt?: string }>`
  white-space: nowrap;
  gap: 4px;
  display: flex;
  flex-direction: column;
  margin-top: ${({ $mt }) => $mt};

  & * {
    font-size: 0.75rem;
    line-height: 1.33;
  }
`;

export default CardDescription;
