import CardOrderSheet from "@/components/CardOrderSheet";

export default function Home() {
  return (
    <>
      <CardOrderSheet
        title="002"
        subtitle={{ value: "Manuel", type: "customer" }}
        table="Mesa 4"
        location="Área Externa"
        createdAt={new Date()}
        orderStatus="LG"
        totalPrice={99999.99}
      />
      <CardOrderSheet
        title="Carolina"
        subtitle={{ value: "001", type: "id" }}
        table="Mesa 8"
        location="Lounge"
        createdAt={new Date()}
        orderStatus="LG"
        totalPrice={149.9}
      />
      <CardOrderSheet
        title="75345876"
        subtitle={{ value: "95 98888-7777", type: "phone" }}
        table="Mesa 12"
        location="Salão Principal"
        createdAt={new Date()}
        orderStatus="PR"
        totalPrice={89.5}
      />
    </>
  );
}
