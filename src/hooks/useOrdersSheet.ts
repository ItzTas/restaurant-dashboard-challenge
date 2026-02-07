"use client";

import useSWR from "swr";
import { OrdersheetsResponse } from "@/types/apiResponse.types";
import { fetchAllOrdersheet } from "@/lib/api/ordersheet";

export function useOrdersheets() {
    const res = useSWR<OrdersheetsResponse>("/ordersheet", fetchAllOrdersheet);

    return res;
}
