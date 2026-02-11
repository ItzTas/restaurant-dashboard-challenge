import { useAppSelector } from "../../store/hooks";

export function useFilterQuery() {
    return useAppSelector((state) => state.filters.filterQuery);
}

export function useFilterStatus() {
    return useAppSelector((state) => state.filters.statusFilter);
}

export function useFilterWaiter() {
    return useAppSelector((state) => state.filters.waiterFilter);
}
