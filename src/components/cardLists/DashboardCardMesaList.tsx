"use client";

import { useFilterQuery } from "@/features/filters/hooks";
import CardMesa from "../cards/CardMesa";
import { CardMesaProps } from "../cards/CardMesa";
import CardsGridList from "./CardsGridList";

export interface CardMesaListProps {
    cards: CardMesaProps[];
}

export default function CardMesaList({ cards }: CardMesaListProps) {
    const filterQuery = useFilterQuery().toLowerCase();

    const filteredCards = cards.filter((card) => {
        const values = [
            card.identifier,
            card.data?.customer.value,
            card.data?.waiterFullName,
        ];

        return values
            .filter(Boolean)
            .some((text) => text!.toLowerCase().includes(filterQuery));
    });

    return (
        <CardsGridList
            data={filteredCards}
            itemContent={(_, card) => <CardMesa {...card} />}
        />
    );
}
