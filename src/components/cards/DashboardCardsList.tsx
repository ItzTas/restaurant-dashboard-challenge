import styled from "styled-components";
import CardOrderSheet from "./CardOrdersheet";

const Container = styled.div`
  gap: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 199px);
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

interface DashboardCardsListProps {
    slug: string;
}

export default function DashboardCardsList({ }: DashboardCardsListProps) {
    return (
        <Container>
            <CardOrderSheet
                title="Pedido #1024"
                subtitle={{ value: "(95) 99123-4567", type: "phone" }}
                tableText="Mesa 12"
                locationText="Salão Principal"
                createdAt={new Date()}
                waiter="Carlos"
                totalPrice={129.9}
            />

            <CardOrderSheet
                title="Pedido #1025"
                subtitle={{ value: "ID 88321", type: "id" }}
                tableText="Mesa 4"
                createdAt={new Date()}
                waiter="Marina"
                totalPrice={58.5}
            />

            <CardOrderSheet
                title="Pedido #1026"
                subtitle={{ value: "João Silva", type: "customer" }}
                locationText="Área Externa"
                createdAt={new Date()}
                waiter="Lucas"
                totalPrice={220}
            />

            <CardOrderSheet
                title="Pedido #1027"
                tableText="Balcão"
                createdAt={new Date()}
                waiter="Ana"
                totalPrice={32.9}
            />

            <CardOrderSheet
                title="Pedido Delivery"
                subtitle={{ value: "Maria Oliveira", type: "customer" }}
                locationText="Delivery"
                createdAt={new Date()}
                waiter="Sistema"
                totalPrice={89.99}
            />

            {/* novos pedidos */}

            <CardOrderSheet
                title="Pedido #1028"
                subtitle={{ value: "(95) 98888-1111", type: "phone" }}
                tableText="Mesa 2"
                locationText="Salão Principal"
                createdAt={new Date()}
                waiter="Fernanda"
                totalPrice={76.4}
            />

            <CardOrderSheet
                title="Pedido #1029"
                subtitle={{ value: "Pedro Henrique", type: "customer" }}
                locationText="Área VIP"
                createdAt={new Date()}
                waiter="Rafael"
                totalPrice={310.0}
            />

            <CardOrderSheet
                title="Pedido #1030"
                subtitle={{ value: "ID 99312", type: "id" }}
                tableText="Mesa 15"
                createdAt={new Date()}
                waiter="Juliana"
                totalPrice={142.75}
            />

            <CardOrderSheet
                title="Pedido #1031"
                subtitle={{ value: "Ana Paula", type: "customer" }}
                locationText="Delivery"
                createdAt={new Date()}
                waiter="Sistema"
                totalPrice={64.9}
            />

            <CardOrderSheet
                title="Pedido #1032"
                subtitle={{ value: "(95) 97777-2222", type: "phone" }}
                tableText="Mesa 7"
                locationText="Varanda"
                createdAt={new Date()}
                waiter="Bruno"
                totalPrice={198.3}
            />

            <CardOrderSheet
                title="Pedido #1033"
                tableText="Balcão"
                createdAt={new Date()}
                waiter="Lucas"
                totalPrice={27.5}
            />
        </Container>
    );
}
