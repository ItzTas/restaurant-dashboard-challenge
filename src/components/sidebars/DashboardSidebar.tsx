import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const Sidebar = styled.aside`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 80px;
    background-color: #fa641e;
  }
`;

type DashboardSidebarProps = React.ComponentProps<typeof Sidebar>;

export default function DashboardSidebar({
    children,
    ...props
}: PropsWithChildren<DashboardSidebarProps>) {
    return <Sidebar {...props}>{children}</Sidebar>;
}
