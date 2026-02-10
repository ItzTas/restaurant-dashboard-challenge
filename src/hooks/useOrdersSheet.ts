"use client";

import useSWR from "swr";
import { OrdersheetsResponse } from "@/types/apiResponse.types";
import { getAllOrdersheet } from "@/lib/api/ordersheet";

export function useOrdersheets() {
    const res = useSWR<OrdersheetsResponse>("/ordersheet", getAllOrdersheet);

    return res;
}
