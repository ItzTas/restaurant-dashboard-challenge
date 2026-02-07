import { Activity } from "@/types/apiResponse.types";
import CardContainer from "./CardContainer";

export interface CardMesaProps {
    tableNumber: number;
    data?: {
        code: string;
        contact: {
            value: string;
            type: "phone" | "customer";
        };
        location: string;
        createdAt: Date;
        waiter: string;
        status: Activity;
        totalPrice: number;
    };
}

export default function CardMesa({
    tableNumber,
    data,
    ...props
}: CardMesaProps & React.HTMLAttributes<HTMLDivElement>) {
    const { code, contact, location, createdAt, waiter, status, totalPrice } =
        data ?? {};

    return <CardContainer {...props}>{data && <div></div>}</CardContainer>;
}
