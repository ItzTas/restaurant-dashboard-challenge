import { PropsWithChildren } from "react";
import styled from "styled-components";
import DashboardTopbar from "@/components/bars/DashboardTopbar";
import DashboardSidebar from "@/components/bars/DashboardSidebar";
import DashboardBottomBar from "@/components/bars/DashboardBottomBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
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
  flex: 1;
  overflow-y: auto;

  @media (min-width: 768px) {
    margin: 0px 10px 10px 8px;
    grid-column: 2;
    grid-row: 2;
  }
`;

const BottomBar = styled(DashboardBottomBar)`
  @media (min-width: 768px) {
    grid-column: 2;
    grid-row: 3;
  }
`;

export default function DashboardLayout({ children }: PropsWithChildren) {
    return (
        <Container>
            <SidebarWrapper />
            <TopbarWrapper />
            <MainContent>{children}</MainContent>
            <BottomBar />
        </Container>
    );
}
