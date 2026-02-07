import styled from "styled-components";

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  vertical-align: middle;

  & * {
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
  }
`;

type Props = React.ComponentProps<typeof Footer>;

export default function CardFooter({ children, ...props }: Props) {
    return <Footer {...props}>{children}</Footer>;
}
