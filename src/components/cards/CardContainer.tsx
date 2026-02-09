import { CardContainerHeight } from "@/constants/components";
import styled from "styled-components";

const CardContainer = styled.div`
  height: ${CardContainerHeight}px;
  width: 199px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  flex-direction: column;
  padding: 12px;
  border-radius: 8px;
`;

export default CardContainer;
