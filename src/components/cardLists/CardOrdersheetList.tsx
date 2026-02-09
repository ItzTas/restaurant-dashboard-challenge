"use client";

import CardOrdersheet from "../cards/CardOrdersheet";
import { CardOrdersheetProps } from "../cards/CardOrdersheet";
import CardsGridList from "./CardsGridList";

interface Props {
    cards: CardOrdersheetProps[];
}

export default function CardOrdersheetList({ cards }: Props) {
    return (
        <CardsGridList
            data={cards}
            itemContent={(_, card) => <CardOrdersheet {...card} />}
        />
    );
}
