import { PropsWithChildren } from "react";
import styled from "styled-components";
import DashboardContextProvider from "./DashboardContext";
import DashboardTopbar from "@/components/bars/DashboardTopbar";
import DashboardSidebar from "@/components/bars/DashboardSidebar";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const SidebarWrapper = styled(DashboardSidebar)`
  grid-column: 1;
  grid-row: 1 / -1;
`;

const TopbarWrapper = styled(DashboardTopbar)`
  grid-column: 2;
  grid-row: 1;
`;

const MainContent = styled.main`
  grid-column: 2;
  grid-row: 2;
  overflow-y: scroll;
`;

export default function DashboardLayout({ children }: PropsWithChildren) {
    return (
        <DashboardContextProvider>
            <GridContainer>
                <SidebarWrapper />
                <TopbarWrapper />
                <MainContent>{children}</MainContent>
            </GridContainer>
        </DashboardContextProvider>
    );
}
