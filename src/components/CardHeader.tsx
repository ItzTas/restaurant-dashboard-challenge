import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  line-height: 32px;
  font-weight: 500;
  gap: 4px;
`;

type Props = React.ComponentProps<"div">;

export default function CardHeader({ children, ...props }: Props) {
    return <Header {...props}>{children}</Header>;
}
