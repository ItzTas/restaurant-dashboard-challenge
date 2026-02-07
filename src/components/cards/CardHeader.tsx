import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  line-height: 1.6;
  font-weight: 500;
  gap: 4px;
  letter-spacing: -2%;
`;

type Props = React.ComponentProps<typeof Header>;

export default function CardHeader({ children, ...props }: Props) {
    return <Header {...props}>{children}</Header>;
}
