import styled from "styled-components";
import SearchInput from "../inputs/FilterInput";
import NavOptions, { TabItem } from "../buttons/NavOptions";
import { DashboardSlugsArray } from "@/constants/dashboard";
import DropdownPrimary from "../dropdowns/DropdownPrimary";
import { capitalize } from "@/utils/string";

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
