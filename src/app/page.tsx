import CardOrderSheet from "@/components/CardOrderSheet";

export default function Home() {
  return (
    <>
      <CardOrderSheet
        title="002"
        subtitle={{ value: "Manuel", type: "customer" }}
        tableText="Mesa 4"
        locationText="Área Externa"
        createdAt={new Date()}
        orderStatus="LG"
        totalPrice={99999.99}
      />
      <CardOrderSheet
        title="Carolina"
        subtitle={{ value: "001", type: "id" }}
        tableText="Mesa 8"
        locationText="Lounge"
        createdAt={new Date()}
        orderStatus="LG"
        totalPrice={149.9}
      />
      <CardOrderSheet
        title="75345876"
        subtitle={{ value: "95 98888-7777", type: "phone" }}
        tableText="Mesa 12"
        locationText="Salão Principal"
        createdAt={new Date()}
        orderStatus="PR"
        totalPrice={89.5}
      />
    </>
  );
}
