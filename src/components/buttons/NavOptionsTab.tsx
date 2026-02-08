import styled from "styled-components";

const NavOptionsTab = styled.button`
  background-color: transparent;
  color: #1a1a1a;
  border: none;
  border-radius: 1rem;
  padding: 0.625rem 1.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.875rem;

  &:hover {
    background-color: #f5f5f5;
  }

  &[data-active="true"] {
    background-color: #1a1a1a;
    color: white;
  }
`;

export default NavOptionsTab;
