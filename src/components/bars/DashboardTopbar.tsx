import styled from "styled-components";
import SearchInput from "../inputs/SearchInput";
import NavOptions, { TabItem } from "../buttons/NavOptions";
import { DashboardValidSlugsArray } from "@/constants/dashboard";

const NavContainer = styled.nav`
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
`;

const RightContainer = styled.div`
  display: flex;
`;

export default function DashboardTopbar() {
    const tabs: TabItem[] = DashboardValidSlugsArray.map((slug) => ({
        label: slug,
        path: `${slug}`,
    }));

    return (
        <NavContainer>
            <RightContainer>
                <NavOptions tabs={tabs} />
                <SearchInput />
            </RightContainer>
        </NavContainer>
    );
}
