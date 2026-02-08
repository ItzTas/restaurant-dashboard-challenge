import { PropsWithChildren } from "react";
import styled from "styled-components";
import DashboardContextProvider from "./DashboardContext";
import DashboardTopbar from "@/components/bars/DashboardTopbar";
import DashboardSidebar from "@/components/bars/DashboardSidebar";

const Container = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
`;

const SidebarWrapper = styled(DashboardSidebar)`
  @media (min-width: 768px) {
    grid-column: 1;
    grid-row: 1 / -1;
  }
`;

const TopbarWrapper = styled(DashboardTopbar)`
  @media (min-width: 768px) {
    grid-column: 2;
    grid-row: 1;
  }
`;

const MainContent = styled.main`
  @media (min-width: 768px) {
    margin: 0px 10px 10px 8px;
    grid-column: 2;
    grid-row: 2;
    overflow-y: scroll;
  }
`;

export default function DashboardLayout({ children }: PropsWithChildren) {
    return (
        <DashboardContextProvider>
            <Container>
                <SidebarWrapper />
                <TopbarWrapper />
                <MainContent>{children}</MainContent>
            </Container>
        </DashboardContextProvider>
    );
}
