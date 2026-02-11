import styled from "styled-components";
import WaitersDropdown from "../dropdowns/WaitersDropdown";

const Container = styled.div`
  background-color: transparent;
  padding: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.17);
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export default function DashboardBottomBar() {
    return (
        <Container>
            <WaitersDropdown />
        </Container>
    );
}
