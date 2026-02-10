import {
    OrdersheetsResponse,
    OrdersheetValue,
} from "@/types/apiResponse.types";
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

    const allOrdersheets = await getAllOrdersheet();
    const idsSet = new Set(ids);

    const output: Record<string, OrdersheetValue> = {};

    for (const ordersheet of Object.values(allOrdersheets)) {
        if (!idsSet.has(ordersheet.id)) continue;

        output[ordersheet.id] = ordersheet;
    }

    return output;
}
