"use client";

import { useFilterQuery, useFilterStatus } from "@/features/filters/hooks";
import CardOrdersheet from "../cards/CardOrdersheet";
import { CardOrdersheetProps } from "../cards/CardOrdersheet";
import CardsGridList from "./CardsGridList";

interface CardOrdersheetListProps {
    cards: CardOrdersheetProps[];
}

function filterCards(
    cards: CardOrdersheetProps[],
    filterQuery: string,
    statusFilter?: string,
) {
    const query = filterQuery.toLowerCase();
    const status = statusFilter?.toLowerCase();

    return cards.filter((card) => {
        const values = [
            card.identifier,
            card.contact?.value,
            card.waiterFullName,
            card.tableText,
            card.model?.value,
        ];

        const matchesSearch = values
            .filter(Boolean)
            .some((text) => text!.toLowerCase().includes(query));

        const matchesStatus = !status || card.activity?.toLowerCase() === status;

        return matchesSearch && matchesStatus;
    });
}

export default function CardOrdersheetList({ cards }: CardOrdersheetListProps) {
    const filterQuery = useFilterQuery();
    const statusFilter = useFilterStatus();

    const filteredCards = filterCards(cards, filterQuery, statusFilter);

    return (
        <CardsGridList
            data={filteredCards}
            itemContent={(_, card) => <CardOrdersheet {...card} />}
        />
    );
}
