import { CardMesaProps } from "@/components/cards/CardMesa";
import { getAllCheckpads } from "@/lib/api/checkpadResponse";
import { CheckpadValue } from "@/types/api.types";
import { getOrdersheetsRecordByIds } from "./api/ordersheet";

async function checkpadToProps(val: CheckpadValue): Promise<CardMesaProps> {
    const { identifier } = val;

    if (!val.hasOrder || val.orderSheetIds.length === 0) {
        return {
            identifier,
            data: undefined,
        };
    }

    const ordersheets = await getOrdersheetsRecordByIds(val.orderSheetIds);

    const ordersheetsArray = Object.values(ordersheets);

    let totalPrice = 0;
    let customerName,
        mainIdentifier,
        custumerIdentifier: string | undefined | null;

    for (const ordersheet of ordersheetsArray) {
        totalPrice += ordersheet.subtotal ?? 0;

        if (customerName) {
            continue;
        }
        if (ordersheet.customerName) {
            customerName = ordersheet.customerName;
            continue;
        }
        if (ordersheet.mainIdentifier) {
            mainIdentifier = ordersheet.mainIdentifier;
        }
        if (mainIdentifier) {
            continue;
        }
        if (ordersheet.identifier) {
            custumerIdentifier = ordersheet.identifier;
        }
    }

    const customer =
        customerName?.trim() ||
        mainIdentifier?.trim() ||
        custumerIdentifier?.trim();

    const isRealName = !!customerName;

    return {
        identifier,
        data: {
            ordersheetsNum: ordersheetsArray.length,
            totalPrice,
            customer: {
                value: customer!,
                isRealName,
            },
            lastOrderCreated: new Date(val.lastOrderCreated!),
            waiterFullName: val.authorName!,
            model: {
                value: val.model,
                icon: val.modelIcon,
            },
        },
    };
}

export async function getDashboardMesas(): Promise<CardMesaProps[]> {
    const res = await getAllCheckpads();

    const promises = Object.values(res.checkpads).map(checkpadToProps);

    return Promise.all(promises);
}
