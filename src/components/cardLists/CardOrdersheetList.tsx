import CardsListContainer from "./CardsListContainer";
import CardOrdersheet, { CardOrdersheetProps } from "../cards/CardOrdersheet";
import CardsListWindow from "./CardsListWindow";

import { RowComponentProps } from "react-window";
import { CardContainerHeight } from "@/constants/components";

interface RowProps {
    cards: CardOrdersheetProps[];
}

function CardRow({ index, style, cards }: RowComponentProps<RowProps>) {
    const card = cards[index];

    return (
        <div style={style}>
            <CardOrdersheet {...card} />
        </div>
    );
}

export interface CardOrdersheetListProps {
    cards: CardOrdersheetProps[];
}

export default function CardOrdersheetLits({ cards }: CardOrdersheetListProps) {
    return (
        <CardsListContainer>
            <CardsListWindow
                Row={CardRow}
                cards={cards}
                rowHeight={CardContainerHeight}
            />
        </CardsListContainer>
    );
}
