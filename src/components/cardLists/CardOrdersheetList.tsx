"use client";

import CardOrdersheet from "../cards/CardOrdersheet";
import { CardOrdersheetProps } from "../cards/CardOrdersheet";
import CardsGridList from "./CardsGridList";

interface CardOrdersheetListProps {
    cards: CardOrdersheetProps[];
}

export default function CardOrdersheetList({ cards }: CardOrdersheetListProps) {
    return (
        <CardsGridList
            data={cards}
            itemContent={(_, card) => <CardOrdersheet {...card} />}
        />
    );
}
