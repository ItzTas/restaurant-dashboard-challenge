import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filters } from "./types";

const initialState: Filters = {
    statusFilter: "",
    waiter: "",
    filterQuery: "",
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setFilterQuery(state, action: PayloadAction<string>) {
            state.filterQuery = action.payload;
        },

        setStatusFilter(state, action: PayloadAction<string>) {
            state.statusFilter = action.payload;
        },

        setWaiter(state, action: PayloadAction<string>) {
            state.waiter = action.payload;
        },

        resetFilters() {
            return initialState;
        },
    },
});

export const { setStatusFilter, setWaiter, setFilterQuery, resetFilters } =
    filtersSlice.actions;

export default filtersSlice.reducer;
