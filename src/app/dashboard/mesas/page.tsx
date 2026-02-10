import CardMesaList from "@/components/cardLists/CardMesaList";
import { getMesas } from "@/lib/api/mesa";

export default async function AreasDashboard() {
    const mesas = await getMesas();

    return <CardMesaList cards={mesas} />;
}
