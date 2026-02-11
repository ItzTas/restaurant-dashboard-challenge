import CardMesaList from "@/components/cardLists/DashboardCardMesaList";
import { getDashboardMesas } from "@/lib/cards/mesa";

export default async function AreasDashboard() {
    const mesas = await getDashboardMesas();

    return <CardMesaList cards={mesas} />;
}
