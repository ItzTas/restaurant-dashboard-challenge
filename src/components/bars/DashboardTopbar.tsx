import styled from "styled-components";
import SearchInput from "../inputs/SearchInput";
import NavOptions, { TabItem } from "../buttons/NavOptions";
import { DashboardValidSlugsArray } from "@/constants/dashboard";
import DropdownPrimary from "../dropdowns/DropdownPrimary";

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
    gap: 8px;
  }
`;

export default function DashboardTopbar() {
    const tabs: TabItem[] = DashboardValidSlugsArray.map((slug) => ({
        label: slug,
        path: `${slug}`,
    }));

    const areas = [
        { id: "visao-geral", label: "Visão Geral", subtitle: "todas as áreas" },
        { id: "salao-principal", label: "Salão Principal" },
        { id: "lounge", label: "Lounge" },
        { id: "area-externa", label: "Área Externa" },
    ];

    return (
        <NavContainer>
            <DropdownPrimary options={areas} />
            <RightContainer>
                <NavOptions tabs={tabs} />
                <SearchInput />
            </RightContainer>
        </NavContainer>
    );
}
