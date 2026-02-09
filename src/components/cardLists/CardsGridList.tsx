"use client";

import { VirtuosoGrid, VirtuosoGridProps } from "react-virtuoso";
import styled from "styled-components";

const GridList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 199px);
  gap: 12px;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const GridItem = styled.div`
  display: flex;
`;

export default function CardsGridList<T>({
    components,
    ...props
}: VirtuosoGridProps<T, unknown>) {
    return (
        <VirtuosoGrid
            components={{
                List: GridList,
                Item: GridItem,
                ...components,
            }}
            {...props}
        />
    );
}
