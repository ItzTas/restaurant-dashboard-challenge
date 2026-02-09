import { JSX } from "react";
import { List, ListProps, RowComponentProps } from "react-window";
import CardsListContainer from "./CardsListContainer";

interface CardsListWindowProps<T extends object>
    extends Omit<
        ListProps<T>,
        "rowCount" | "rowHeight" | "rowComponent" | "rowProps"
    > {
    cards: T[];
    Row: (props: RowComponentProps<{ cards: T[] }>) => JSX.Element;
    rowHeight: number;
}

export default function CardsListWindow<T extends object>({
    cards,
    Row,
    rowHeight,
    ...props
}: CardsListWindowProps<T>) {
    return (
        <CardsListContainer>
            <List
                rowComponent={Row}
                rowCount={cards.length}
                rowHeight={rowHeight}
                rowProps={{ cards }}
                {...props}
            />
        </CardsListContainer>
    );
}
