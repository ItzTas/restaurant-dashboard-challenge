"use client";

import { PropsWithChildren, useContext } from "react";
import { createContext } from "react";

const SearchContext = createContext(null);

export default function SearchContextProvider({
    children,
}: PropsWithChildren) {
    return <SearchContext value={null}>{children}</SearchContext>;
}

export function useDashboard() {
    const context = useContext(SearchContext);
    if (!context) {
        Error("useDashboard must be used within a DashboardContextProvider");
    }
    return context;
}
