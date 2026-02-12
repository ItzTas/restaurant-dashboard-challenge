import { Filters } from "@/features/filters/types";
import { ApiActivity } from "@/types/api";

export function filterCards<
    T extends { activity?: ApiActivity; waiterFullName?: string | null },
>(
    cards: T[],
    filters: Filters,
    getValues: (card: T) => (string | undefined | null)[],
) {
    const { filterQuery, statusFilter, waiterFilter } = filters;

    const query = filterQuery?.toLowerCase();
    const status = statusFilter?.trim().toLowerCase();

    return cards.filter((card) => {
        const values = getValues(card);

        const matchesSearch = values
            .filter(Boolean)
            .some((text) => text!.toLowerCase().includes(query));

        const cardStatus = card.activity?.toLowerCase() ?? "";

        const matchesStatus = !status || cardStatus === status;

        const matchesWaiter = !waiterFilter || card.waiterFullName === waiterFilter;

        return matchesSearch && matchesStatus && matchesWaiter;
    });
}

export function getDefaultOption<T extends { id: string }>(
    options: T[],
    filter?: string,
): number {
    if (!filter) return 0;

    for (const [i, option] of options.entries()) {
        if (option.id === filter) {
            return i;
        }
    }

    return 0;
}
