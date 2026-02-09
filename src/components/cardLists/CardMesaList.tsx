"use client";

import CardMesa from "../cards/CardMesa";
import { CardMesaProps } from "../cards/CardMesa";
import CardsGridList from "./CardsGridList";

export interface CardMesaListProps {
    cards: CardMesaProps[];
}

export default function CardMesaList({ cards }: CardMesaListProps) {
    return (
        <CardsGridList
            data={cards}
            itemContent={(_, card) => <CardMesa {...card} />}
        />
    );
}
