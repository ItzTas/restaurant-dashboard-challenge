import { PropsWithChildren } from "react";
import DashboardContextProvider from "./DashboardContext";

export default function DashboardLayout({ children }: PropsWithChildren) {
    return <DashboardContextProvider>{children}</DashboardContextProvider>;
}
