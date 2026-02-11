"use client";

import { useFilterQuery, useFilterStatus } from "@/features/filters/hooks";
import CardMesa from "../cards/CardMesa";
import { CardMesaProps } from "../cards/CardMesa";
import CardsGridList from "./CardsGridList";
import { filterCards } from "@/utils/cards";
import { useDebounce } from "../hooks/useDebounce";

export interface CardMesaListProps {
    cards: CardMesaProps[];
}

export default function CardMesaList({ cards }: CardMesaListProps) {
    const filterQuery = useDebounce(useFilterQuery(), 250);
    const statusFilter = useFilterStatus();

    const filteredCards = filterCards(
        cards,
        (card: CardMesaProps) => [
            card.identifier,
            card.data?.customer.value,
            card.data?.waiterFullName,
        ],
        filterQuery,
        statusFilter,
    );

    return (
        <CardsGridList
            data={filteredCards}
            itemContent={(_, card) => <CardMesa {...card} />}
        />
    );
}
