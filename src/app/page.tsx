import CardOrdersheet from "@/components/CardOrdersheet";

export default function Home() {
    return (
        <>
            <CardOrdersheet
                title="002"
                subtitle={{ value: "Manuel", type: "customer" }}
                tableText="Mesa 4"
                locationText="Área Externa"
                createdAt={new Date(new Date().getTime() - 2 * 60 * 60 * 1000)} // 2h atrás
                orderStatus="LG"
                totalPrice={99999.99}
            />

            <CardOrdersheet
                title="003"
                tableText="Mesa 7"
                locationText="Lounge"
                createdAt={new Date(new Date().getTime() - 45 * 60 * 1000)} // 45 min atrás
                orderStatus="PR"
                totalPrice={250.0}
            />

            <CardOrdersheet
                title="004"
                subtitle={{ value: "Alice", type: "customer" }}
                locationText="Área Interna"
                createdAt={new Date(new Date().getTime() - 30 * 60 * 1000)} // 30 min atrás
                orderStatus="LG"
                totalPrice={120.5}
            />

            <CardOrdersheet
                title="005"
                subtitle={{ value: "001", type: "id" }}
                tableText="Mesa 12"
                createdAt={new Date(new Date().getTime() - 15 * 60 * 1000)} // 15 min atrás
                orderStatus="PR"
                totalPrice={89.9}
            />

            <CardOrdersheet
                title="006"
                createdAt={new Date(new Date().getTime() - 5 * 60 * 1000)} // 5 min atrás
                orderStatus="LG"
                totalPrice={59.99}
            />

            <CardOrdersheet
                title="75345876"
                subtitle={{ value: "95 98888-7777", type: "phone" }}
                tableText="Mesa 12"
                locationText="Salão Principal"
                createdAt={new Date(new Date().getTime() - 60 * 60 * 1000)} // 1h atrás
                orderStatus="PR"
                totalPrice={89.5}
            />
        </>
    );
}
