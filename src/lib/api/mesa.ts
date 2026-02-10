import { CardMesaProps } from "@/components/cards/CardMesa";
import { getAllCheckpads } from "@/lib/api/checkpadResponse";
import { CheckpadValue } from "@/types/apiResponse.types";
import { getOrdersheetsRecordByIds } from "./ordersheet";

async function CheckpadToMesaProps(
    checkpadValue: CheckpadValue,
): Promise<CardMesaProps> {
    const { identifier } = checkpadValue;

    if (!checkpadValue.hasOrder || checkpadValue.orderSheetIds.length === 0) {
        return {
            identifier,
            data: undefined,
        };
    }

    const ordersheets = await getOrdersheetsRecordByIds(
        checkpadValue.orderSheetIds,
    );

    const ordersheetsArray = Object.values(ordersheets);

    let totalPrice = 0;
    let customerName: string | undefined;

    for (const ordersheet of ordersheetsArray) {
        totalPrice += ordersheet.subtotal ?? 0;

        console.log(ordersheet.customerName);
        console.log(ordersheet);
        if (customerName) {
            continue;
        }
        customerName = ordersheet.customerName;
    }

    if (!customerName) {
        customerName = "Sem nome";
    }

    return {
        identifier,
        data: {
            ordersheetsNum: ordersheetsArray.length,
            totalPrice,
            customer: customerName,
            lastOrderCreated: new Date(checkpadValue.lastOrderCreated!),
            waiterFullName: checkpadValue.authorName!,
            model: {
                value: checkpadValue.model,
                icon: checkpadValue.modelIcon,
            },
        },
    };
}

export async function getMesas(): Promise<CardMesaProps[]> {
    const checkpadResponse = await getAllCheckpads();

    const promises = Object.values(checkpadResponse.checkpads).map(
        CheckpadToMesaProps,
    );

    const output = await Promise.all(promises);

    return output;
}
