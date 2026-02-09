import CardMesaList from "@/components/cardLists/CardMesaList";
import { CardMesaProps } from "@/components/cards/CardMesa";
import { fetchAllCheckpadResponse } from "@/lib/api/checkpadResponse";

export function generateMesas(count: number): CardMesaProps[] {
    const waiters = ["Carlos", "Ana", "Luiz", "Maria", "João", "Fernanda"];
    const locations = ["Sala A", "Sala B", "Sala C", "Varanda", "VIP"];
    const contactTypes = ["phone", "customer"] as const;

    return Array.from({ length: count }, (_, i) => {
        const hasData = Math.random() > 0.3;
        const contactType =
            contactTypes[Math.floor(Math.random() * contactTypes.length)];

        return {
            tableNumber: i + 1,
            data: hasData
                ? {
                    code: `ORD-${1000 + i}`,
                    contact: {
                        value:
                            contactType === "phone"
                                ? `+55 11 9${Math.floor(
                                    1000 + Math.random() * 9000,
                                )}-${Math.floor(1000 + Math.random() * 9000)}`
                                : `Cliente ${i}`,
                        type: contactType,
                    },
                    location: locations[i % locations.length],
                    createdAt: new Date(Date.now() - i * 60000),
                    waiter: waiters[i % waiters.length],
                    totalPrice: Number((Math.random() * 300).toFixed(2)),
                }
                : undefined,
        };
    });
}

export default async function AreasDashboard() {
    const sampleMesas = generateMesas(10000);

    const mesas = await getMesas();
    console.log(mesas);

    return <CardMesaList cards={mesas} />;
}

async function getMesas(): Promise<CardMesaProps[]> {
    const response = await fetchAllCheckpadResponse();

    const output: CardMesaProps[] = Object.values(response.checkpads).map(
        (item) => {
            const tableNumber = Number(item.identifier);

            return {
                tableNumber,

                data: item.hasOrder
                    ? {
                        code: String(item.id),

                        contact: {
                            value: item.customerIdentifier ?? "Sem identificação",
                            type: "customer",
                        },

                        location: item.model ?? "—",

                        createdAt: item.lastOrderCreated
                            ? new Date(item.lastOrderCreated)
                            : new Date(),

                        waiter: item.authorName ?? "—",

                        totalPrice: (item.subtotal ?? 0) / 100,
                    }
                    : undefined,
            };
        },
    );

    return output;
}
