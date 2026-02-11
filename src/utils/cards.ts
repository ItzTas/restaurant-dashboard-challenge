import { ApiActivity } from "@/types/api";

export function filterCards<T extends { activity?: ApiActivity }>(
    cards: T[],
    getValues: (card: T) => (string | undefined)[],
    filterQuery: string,
    statusFilter?: string,
) {
    const query = filterQuery.toLowerCase();
    const status = statusFilter?.trim().toLowerCase(); // trim evita espaços

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
