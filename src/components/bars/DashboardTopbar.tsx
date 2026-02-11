import styled from "styled-components";
import SearchInput from "../inputs/FilterInput";
import NavOptions, { TabItem } from "../buttons/NavOptions";
import { DashboardSlugsArray } from "@/constants/dashboard";
import { capitalize } from "@/utils/string";
import StatusDropdown from "../dropdowns/StatusDropdown";

const NavContainer = styled.nav`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

const RightContainer = styled.div`
  gap: 4px;
  display: flex;

  @media (min-width: 768px) {
    gap: 10px;
  }
`;

export default function DashboardTopbar() {
    const tabs: TabItem[] = DashboardSlugsArray.map((slug) => ({
        label: capitalize(slug),
        path: `dashboard/${slug}`,
    }));

    return (
        <NavContainer>
            <StatusDropdown />
            <RightContainer>
                <NavOptions tabs={tabs} />
                <SearchInput />
            </RightContainer>
        </NavContainer>
    );
}
