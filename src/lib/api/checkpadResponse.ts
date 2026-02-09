import { OrdersheetsResponse } from "@/types/apiResponse.types";
import { apiUrl } from "../../constants/api";

export async function fetchAllCheckpadResponse(): Promise<OrdersheetsResponse> {
    const res = await fetch(`${apiUrl}/checkpadResponse`);
    if (!res.ok) {
        throw new Error("Failed to fetch");
    }
    return res.json();
}
