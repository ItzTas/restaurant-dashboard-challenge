import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Filters = {
    status?: string;
    waiter?: string;
    filterQuery: string;
};

const initialState: Filters = {
    status: undefined,
    waiter: undefined,
    filterQuery: "",
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setStatus(state, action: PayloadAction<string | undefined>) {
            state.status = action.payload;
        },

        setWaiter(state, action: PayloadAction<string | undefined>) {
            state.waiter = action.payload;
        },

        setFilterQuery(state, action: PayloadAction<string>) {
            state.filterQuery = action.payload;
        },

        resetFilters() {
            return initialState;
        },
    },
});

export const { setStatus, setWaiter, setFilterQuery, resetFilters } =
    filtersSlice.actions;

export default filtersSlice.reducer;
