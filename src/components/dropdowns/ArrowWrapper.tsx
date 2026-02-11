import styled from "styled-components";

const ArrowWrapper = styled.span`
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;

  &[data-open="true"] {
    transform: rotate(180deg);
  }
`;

export default ArrowWrapper;
