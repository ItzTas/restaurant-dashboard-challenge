"use client";

import {
    useFilterQuery,
    useFilterStatus,
    useFilterWaiter,
} from "@/features/filters/hooks";
import CardMesa from "../cards/CardMesa";
import { CardMesaProps } from "../cards/CardMesa";
import CardsGridList from "./CardsGridList";
import { filterCards } from "@/utils/cards";
import { useDebounce } from "../../hooks/useDebounce";
import { Filters } from "@/features/filters/types";

export interface CardMesaListProps {
    cards: CardMesaProps[];
}

export default function MesaCardList({ cards }: CardMesaListProps) {
    const filterQuery = useDebounce(useFilterQuery(), 250);
    const statusFilter = useFilterStatus();
    const waiterFilter = useFilterWaiter();

    const filters: Filters = {
        filterQuery,
        statusFilter,
        waiterFilter,
    };

    const filteredCards = filterCards(cards, filters, (card: CardMesaProps) => [
        card.identifier,
        card.data?.customer.value,
        card.waiterFullName,
    ]);

    return (
        <CardsGridList
            data={filteredCards}
            itemContent={(_, card) => <CardMesa {...card} />}
        />
    );
}
