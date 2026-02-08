import { OrdersheetsResponse } from "@/types/apiResponse.types";
import { apiUrl } from "../../constants/api";

export async function fetchAllOrdersheet(): Promise<OrdersheetsResponse> {
    const res = await fetch(`${apiUrl}/ordersheet`);
    if (!res.ok) {
        throw new Error("Failed to fetch");
    }
    return res.json();
}
