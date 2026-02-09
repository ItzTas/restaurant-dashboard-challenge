import { List } from "react-window";
import { CardMesaProps } from "./CardMesa";
import CardsListContainer from "./CardsListContainer";

export interface CardOrdersheetListProps {
    cards: CardOrdersheetListProps[];
}

export default function CardOrdersheetLits({ cards }: CardOrdersheetListProps) {
    return (
        <CardsListContainer>
            <List rowComponent={CardsListContainer} />
        </CardsListContainer>
    );
}
