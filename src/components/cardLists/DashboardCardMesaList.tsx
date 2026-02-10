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
        const identifier = card.identifier.toLowerCase();
        const customerName = card.data?.customer.value.toLowerCase() ?? "";
        const waiterName = card.data?.waiterFullName.toLowerCase() ?? "";

        return (
            identifier.includes(filterQuery) ||
            customerName.includes(filterQuery) ||
            waiterName.includes(filterQuery)
        );
    });

    return (
        <CardsGridList
            data={filteredCards}
            itemContent={(_, card) => <CardMesa {...card} />}
        />
    );
}
