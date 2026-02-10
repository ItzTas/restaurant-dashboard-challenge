import { CardContainerHeight } from "@/constants/components";
import styled from "styled-components";

interface CardContainerProps {
    width?: number;
}

const CardContainer = styled.div<CardContainerProps>`
  height: ${CardContainerHeight}px;
  width: ${({ width }) => (width ? `${width}px` : "199px")};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export default CardContainer;
