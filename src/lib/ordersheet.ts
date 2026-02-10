import { CardOrdersheetProps } from "@/components/cards/CardOrdersheet";
import { getAllOrdersheet } from "./api/ordersheet";
import { OrdersheetValue } from "@/types/api.types";

function getOrderIdentifier(val: OrdersheetValue): string {
    const priorities: (keyof OrdersheetValue)[] = [
        "mainIdentifier",
        "customerName",
        "contact",
        "identifier",
        "id",
    ] as const;

    for (const priority of priorities) {
        if (val[priority]) {
            return String(val[priority]);
        }
    }

    return "";
}

export async function orderSheetToProps(
    val: OrdersheetValue,
): Promise<CardOrdersheetProps> {
    const identifier = getOrderIdentifier(val);

    return {
        identifier,
        idleTime: val.idleTime,
    };
}

export async function getDashboardOrdersheets(): Promise<
    CardOrdersheetProps[]
> {
    const res = await getAllOrdersheet();
    console.log(res);

    const promises = Object.values(res).map(orderSheetToProps);

    return Promise.all(promises);
}
