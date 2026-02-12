import MesaCardList from "@/components/cardLists/MesaCardList";
import { getDashboardMesas } from "@/lib/cards/mesa";

export default async function AreasDashboard() {
    const mesas = await getDashboardMesas();

    return <MesaCardList cards={mesas} />;
}
