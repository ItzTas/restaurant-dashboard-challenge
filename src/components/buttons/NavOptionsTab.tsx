import styled from "styled-components";

const NavOptionsTab = styled.button<{ active: boolean }>`
  background-color: ${(props) => (props.active ? "#1a1a1a" : "transparent")};
  color: ${(props) => (props.active ? "white" : "#1a1a1a")};
  border: none;
  border-radius: 1rem;
  padding: 0.625rem 1.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.875rem;

  &:hover {
    background-color: ${(props) => (props.active ? "#1a1a1a" : "#f5f5f5")};
  }
`;

export default NavOptionsTab;
