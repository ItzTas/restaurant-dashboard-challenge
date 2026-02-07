import styled from "styled-components";

const Container = styled.div`
  height: 150px;
  width: 199px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  flex-direction: column;
  padding: 12px;
  border-radius: 8px;
`;

type Props = React.ComponentProps<typeof Container>;

export default function CardContainer({ children, ...props }: Props) {
    return <Container {...props}>{children}</Container>;
}
