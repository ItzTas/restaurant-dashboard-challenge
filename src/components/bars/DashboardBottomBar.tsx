import styled from "styled-components";
import WaitersDropdown from "../dropdowns/WaitersDropdown";

const Container = styled.div`
  background-color: transparent;
  padding: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.17);
`;

export default function DashboardBottomBar() {
    return (
        <Container>
            <WaitersDropdown />
        </Container>
    );
}
