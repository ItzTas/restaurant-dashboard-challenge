import CardOrdersheetList from "@/components/cardLists/CardOrdersheetList";
import { CardOrdersheetProps } from "@/components/cards/CardOrdersheet";

export function generateOrders(count: number): CardOrdersheetProps[] {
    const waiters = ["Carlos", "Ana", "Luiz", "Maria", "João", "Fernanda"];
    const rooms = ["Sala A", "Sala B", "Sala C", "Varanda", "VIP"];
    const subtitleTypes = ["customer", "phone", "id"] as const;

    return Array.from({ length: count }, (_, i) => {
        const subtitleType =
            subtitleTypes[Math.floor(Math.random() * subtitleTypes.length)];

        return {
            title: `Pedido #${100 + i}`,
            subtitle: {
                value:
                    subtitleType === "phone"
                        ? `+55 11 9${Math.floor(
                            1000 + Math.random() * 9000,
                        )}-${Math.floor(1000 + Math.random() * 9000)}`
                        : subtitleType === "id"
                            ? `Cliente-${i}`
                            : `Cliente ${i}`,
                type: subtitleType,
            },
            tableText: `Mesa ${1 + (i % 12)}`,
            locationText: rooms[i % rooms.length],
            createdAt: new Date(Date.now() - i * 60000),
            waiter: waiters[i % waiters.length],
            totalPrice: Number((Math.random() * 300).toFixed(2)),
        };
    });
}

export default async function OrdersheetDashboard() {
    const sampleCards = generateOrders(10000);

    return <CardOrdersheetList cards={sampleCards} />;
}
