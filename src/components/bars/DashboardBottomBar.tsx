import styled from "styled-components";
import DropdownSecondary from "../dropdowns/DropdownSecondary";

const Container = styled.div`
  background-color: transparent;
  padding: 10px;
  border-color: #e0e0e0;
  border-top: 1px;
`;

export default function DashboardBottomBar() {
    const atendentes = [
        { id: "1", label: "Brunissa" },
        { id: "2", label: "Leonercio Goesfeeld" },
        { id: "3", label: "Jassernado" },
    ];

    return (
        <Container>
            <DropdownSecondary options={atendentes} />
        </Container>
    );
}
