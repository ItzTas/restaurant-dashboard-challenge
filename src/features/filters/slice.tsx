import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filters } from "./types";

const initialState: Filters = {
    status: undefined,
    waiter: undefined,
    filterQuery: "",
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setFilterQuery(state, action: PayloadAction<string>) {
            state.filterQuery = action.payload;
        },

        setStatus(state, action: PayloadAction<string | undefined>) {
            state.status = action.payload;
        },

        setWaiter(state, action: PayloadAction<string | undefined>) {
            state.waiter = action.payload;
        },

        resetFilters() {
            return initialState;
        },
    },
});

export const { setStatus, setWaiter, setFilterQuery, resetFilters } =
    filtersSlice.actions;

export default filtersSlice.reducer;
