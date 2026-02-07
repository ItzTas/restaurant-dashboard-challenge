import CardMesa from "@/components/CardMesa";
import CardOrdersheet from "@/components/CardOrdersheet";

export default function Home() {
    return (
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <CardMesa
                tableNumber={7}
                data={{
                    code: "75340864",
                    contact: {
                        value: "Mailson",
                        type: "customer",
                    },
                    location: "Salão Principal",
                    createdAt: new Date(),
                    waiter: "LG",
                    status: "open",
                    totalPrice: 199.9,
                }}
            />

            <CardMesa
                tableNumber={8}
                data={{
                    code: "001",
                    contact: {
                        value: "95 99999-9999",
                        type: "phone",
                    },
                    location: "Lounge",
                    createdAt: new Date(Date.now() - 1000 * 60 * 5),
                    waiter: "JP",
                    status: "pending",
                    totalPrice: 59.5,
                }}
            />

            <CardMesa
                tableNumber={9}
                data={{
                    code: "004",
                    location: "Salão Principal",
                    createdAt: new Date(Date.now() - 1000 * 60 * 12),
                    waiter: "LG",
                    status: "closed",
                    totalPrice: 320,
                }}
            />

            <CardMesa tableNumber={13} />
        </div>
    );
}
