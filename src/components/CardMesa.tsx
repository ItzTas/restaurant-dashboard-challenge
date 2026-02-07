import { Activity } from "@/types/apiResponse.types";

export interface TableCardProps {
    tableNumber: number;
    data?: {
        code?: string;
        contact?: {
            name?: string;
            phone?: string;
        };
        location?: string;
        timeInMinutes?: number;
        waiter?: string;
        totalPrice?: number;
        status?: Activity;
    };
}

export default function CardMesa() { }
