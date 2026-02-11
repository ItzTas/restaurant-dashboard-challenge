import { Filters } from "@/features/filters/types";
import { ApiActivity } from "@/types/api";

export function filterCards<T extends { activity?: ApiActivity }>(
    cards: T[],
    getValues: (card: T) => (string | undefined)[],
    filters: Filters,
) {
    const { filterQuery, statusFilter } = filters;

    const query = filterQuery.toLowerCase();
    const status = statusFilter?.trim().toLowerCase();

    return cards.filter((card) => {
        const values = getValues(card);

        const matchesSearch = values
            .filter(Boolean)
            .some((text) => text!.toLowerCase().includes(query));

        const cardStatus = card.activity?.toLowerCase() ?? "";

        const matchesStatus = !status || cardStatus === status;

        return matchesSearch && matchesStatus;
    });
}
