"use client";

import { useFilterQuery } from "@/features/filters/hooks";
import CardOrdersheet from "../cards/CardOrdersheet";
import { CardOrdersheetProps } from "../cards/CardOrdersheet";
import CardsGridList from "./CardsGridList";

interface CardOrdersheetListProps {
    cards: CardOrdersheetProps[];
}

export default function CardOrdersheetList({ cards }: CardOrdersheetListProps) {
    const filterQuery = useFilterQuery().toLowerCase();

    const filteredCards = cards.filter((card) => {
        const searchables = [
            card.identifier,
            card.contact?.value,
            card.waiterFullName,
            card.tableText,
            card.model?.value,
        ];

        return searchables
            .filter(Boolean)
            .some((text) => text!.toLowerCase().includes(filterQuery));
    });

    return (
        <CardsGridList
            data={filteredCards}
            itemContent={(_, card) => <CardOrdersheet {...card} />}
        />
    );
}
