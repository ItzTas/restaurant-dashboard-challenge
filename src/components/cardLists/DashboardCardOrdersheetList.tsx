"use client";

import {
    useFilterQuery,
    useFilterStatus,
    useFilterWaiter,
} from "@/features/filters/hooks";
import CardOrdersheet from "../cards/CardOrdersheet";
import { CardOrdersheetProps } from "../cards/CardOrdersheet";
import CardsGridList from "./CardsGridList";
import { filterCards } from "@/utils/cards";
import { useDebounce } from "../../hooks/useDebounce";
import { Filters } from "@/features/filters/types";

interface CardOrdersheetListProps {
    cards: CardOrdersheetProps[];
}

export default function CardOrdersheetList({ cards }: CardOrdersheetListProps) {
    const filterQuery = useDebounce(useFilterQuery(), 250);
    const statusFilter = useFilterStatus();
    const waiterFilter = useFilterWaiter();

    const filters: Filters = {
        statusFilter,
        filterQuery,
        waiterFilter,
    };

    const filteredCards = filterCards(cards, filters, (card) => [
        card.identifier,
        card.contact?.value,
        card.waiterFullName,
        card.tableText,
        card.model?.value,
    ]);

    return (
        <CardsGridList
            data={filteredCards}
            itemContent={(_, card) => <CardOrdersheet {...card} />}
        />
    );
}
