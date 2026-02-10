import styled from "styled-components";

const Input = styled.input<{ height?: string; width?: string }>`
  height: ${(props) => props.height || "24px"};
  width: ${(props) => props.width || "clamp(50px, 20vw, 184px)"};
  background-color: transparent;
  border-radius: 8px;
  outline: none;
  border: none;
  font-size: 0.8rem;
  line-height: 1.5;
  border-bottom: 1px solid #ccc;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export default Input;
