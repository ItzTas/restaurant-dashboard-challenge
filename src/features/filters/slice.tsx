import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filters } from "./types";

const initialState: Filters = {
    statusFilter: "",
    waiterFilter: "",
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

        setWaiterFilter(state, action: PayloadAction<string>) {
            state.waiterFilter = action.payload;
        },

        resetFilters() {
            return initialState;
        },
    },
});

export const {
    setStatusFilter,
    setWaiterFilter,
    setFilterQuery,
    resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
