"use client";

import { PropsWithChildren, useContext } from "react";
import { createContext } from "react";

const DashboardContext = createContext(null);

export default function DashboardContextProvider({
    children,
}: PropsWithChildren) {
    return <DashboardContext value={null}>{children}</DashboardContext>;
}

export function useDashboard() {
    const context = useContext(DashboardContext);
    if (!context) {
        Error("useDashboard must be used within a DashboardContextProvider");
    }
    return context;
}
