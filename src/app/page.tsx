import CardMesa from "@/components/cards/CardMesa";
import CardOrderSheet from "@/components/cards/CardOrdersheet";

const NOW = new Date();

const FIVE_MIN_AGO = new Date(NOW.getTime() - 1000 * 60 * 5);
const TWELVE_MIN_AGO = new Date(NOW.getTime() - 1000 * 60 * 12);
const TWENTY_MIN_AGO = new Date(NOW.getTime() - 1000 * 60 * 20);

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
                    createdAt: NOW,
                    status: "LG",
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
                    createdAt: FIVE_MIN_AGO,
                    status: "JP",
                    totalPrice: 59.5,
                }}
            />

            <CardMesa
                tableNumber={9}
                data={{
                    code: "004",
                    contact: {
                        value: "Carolina",
                        type: "customer",
                    },
                    location: "Salão Principal",
                    createdAt: TWELVE_MIN_AGO,
                    status: "LG",
                    totalPrice: 320,
                }}
            />

            <CardMesa tableNumber={13} />

            <CardMesa
                tableNumber={16}
                data={{
                    code: "002",
                    contact: {
                        value: "95 98888-7777",
                        type: "phone",
                    },
                    location: "Varanda",
                    createdAt: TWENTY_MIN_AGO,
                    status: "AM",
                    totalPrice: 480.75,
                }}
            />

            <CardOrderSheet
                title="75340864"
                subtitle={{
                    value: "Mailson",
                    type: "customer",
                }}
                tableText="Mesa 7"
                locationText="Salão Principal"
                createdAt={new Date("2026-02-07T13:30:00")}
                orderStatus="LG"
                totalPrice={199.9}
            />
        </div>
    );
}
