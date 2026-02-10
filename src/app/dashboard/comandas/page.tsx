import CardOrdersheetList from "@/components/cardLists/DashboardCardOrdersheetList";
import { getDashboardOrdersheets } from "@/lib/ordersheet";

export default async function OrdersheetDashboard() {
    const cards = await getDashboardOrdersheets();

    return <CardOrdersheetList cards={cards} />;
}
