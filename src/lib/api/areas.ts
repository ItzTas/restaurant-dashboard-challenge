import { OrdersheetsResponse } from "@/types/apiResponse.types";
import { apiUrl } from "../../constants/api";

export async function getAllAreas(): Promise<OrdersheetsResponse> {
    const res = await fetch(`${apiUrl}/areas`);
    if (!res.ok) {
        throw new Error("Failed to fetch");
    }
    return res.json();
}
