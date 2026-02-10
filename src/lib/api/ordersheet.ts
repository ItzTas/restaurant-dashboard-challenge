import {
    OrdersheetsResponse,
    OrdersheetValue,
} from "@/types/api";
import { apiUrl } from "../../constants/api";

export async function getAllOrdersheet(): Promise<OrdersheetsResponse> {
    const res = await fetch(`${apiUrl}/ordersheets`);
    if (!res.ok) {
        console.log(res);
        throw new Error("Failed to fetch");
    }
    return res.json();
}

export async function getOrdersheetsRecordByIds(
    ids: number[],
): Promise<Record<string, OrdersheetValue>> {
    if (ids.length === 0) return {};

    const ordersheets = await getAllOrdersheet();
    const output: Record<string, OrdersheetValue> = {};

    for (const id of ids) {
        const ordersheet = ordersheets[id];
        if (!ordersheet) continue;

        output[id] = ordersheet;
    }

    return output;
}
