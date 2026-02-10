import { CardMesaProps } from "@/components/cards/CardMesa";
import { getAllCheckpads } from "@/lib/api/checkpadResponse";
import { CheckpadValue } from "@/types/apiResponse.types";
import { getOrdersheetsRecordByIds } from "./ordersheet";

async function CheckpadToMesaProps(
    checkpadValue: CheckpadValue,
): Promise<CardMesaProps> {
    const { id, identifier } = checkpadValue;

    if (!checkpadValue.hasOrder || checkpadValue.orderSheetIds.length === 0) {
        return {
            identifier,
            data: undefined,
        };
    }

    const ordersheets = await getOrdersheetsRecordByIds(
        checkpadValue.orderSheetIds,
    );

    const totalPrice = Object.values(ordersheets).reduce((acc, ordersheet) => {
        return acc + ordersheet.subtotal;
    }, 0);

    const cardProps: CardMesaProps = {
        identifier: identifier,
        data: {
            totalPrice,
            customer: "customer",
            lastOrderCreated: new Date(checkpadValue.lastOrderCreated!),
        },
    };

    return cardProps;
}

export async function getMesas(): Promise<CardMesaProps[]> {
    const checkpadResponse = await getAllCheckpads();

    const promises = Object.values(checkpadResponse.checkpads).map(
        CheckpadToMesaProps,
    );

    const output = await Promise.all(promises);

    return output;
}
