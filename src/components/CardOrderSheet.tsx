import styled from "styled-components";

export interface OrderCardProps {
    title: string;
    subtitle: {
        value: string;
        type: "phone" | "id" | "customer";
    };
    table: string;
    location: string;
    createdAt: Date;
    orderStatus: string;
    totalPrice: number;
}

const Container = styled.div`
  height: 150px;
  width: 199px;
  display: flex;
  justify-content: space-between;
`;

export default function CardOrderSheet({
    title,
    subtitle,
    table,
    location,
    createdAt,
    orderStatus,
    totalPrice,
}: OrderCardProps) {
    return <Container>{title}</Container>;
}
