import OrdersheetCardList from "@/components/cardLists/OrdersheetCardList";
import { getDashboardOrdersheets } from "@/lib/cards/ordersheet";

export default async function OrdersheetDashboard() {
    const cards = await getDashboardOrdersheets();

    return <OrdersheetCardList cards={cards} />;
}
