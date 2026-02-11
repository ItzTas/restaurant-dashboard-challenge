"use client";

import { useFilterQuery, useFilterStatus } from "@/features/filters/hooks";
import CardOrdersheet from "../cards/CardOrdersheet";
import { CardOrdersheetProps } from "../cards/CardOrdersheet";
import CardsGridList from "./CardsGridList";
import { filterCards } from "@/utils/cards";
import { useDebounce } from "../hooks/useDebounce";

interface CardOrdersheetListProps {
    cards: CardOrdersheetProps[];
}

export default function CardOrdersheetList({ cards }: CardOrdersheetListProps) {
    const filterQuery = useDebounce(useFilterQuery(), 250);
    const statusFilter = useFilterStatus();

    const filteredCards = filterCards(
        cards,
        (card) => [
            card.identifier,
            card.contact?.value,
            card.waiterFullName,
            card.tableText,
            card.model?.value,
        ],
        filterQuery,
        statusFilter,
    );

    return (
        <CardsGridList
            data={filteredCards}
            itemContent={(_, card) => <CardOrdersheet {...card} />}
        />
    );
}
