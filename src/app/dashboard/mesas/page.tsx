import CardMesaList from "@/components/cardLists/CardMesaList";
import { getDashboardMesas } from "@/lib/mesa";

export default async function AreasDashboard() {
    const mesas = await getDashboardMesas();

    return <CardMesaList cards={mesas} />;
}
