import CardMesaList from "@/components/cardLists/CardMesaList";
import { getMesas } from "@/lib/api/mesas";

export default async function AreasDashboard() {
    const mesas = await getMesas();
    console.log(mesas);

    return <CardMesaList cards={mesas} />;
}
