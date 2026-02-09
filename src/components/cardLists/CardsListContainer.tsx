import styled from "styled-components";

const CardsListContainer = styled.div`
  gap: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 199px);
  justify-content: center;
  height: 600px;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export default CardsListContainer;
