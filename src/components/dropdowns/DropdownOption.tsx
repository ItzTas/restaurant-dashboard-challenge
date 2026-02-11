import styled from "styled-components";

const DropdownOption = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  background-color: white;
  color: #333;
  text-align: left;
  cursor: pointer;
  font-size: 15px;
  transition: background-color 0.15s ease;
  font-family: inherit;
  white-space: nowrap;

  &:hover {
    filter: brightness(80%);
  }

  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }

  &[data-active="true"] {
    background-color: #212121;
    color: white;

    &:hover {
      background-color: #1a1a1a;
      filter: brightness(180%);
    }
  }
`;

export default DropdownOption;
