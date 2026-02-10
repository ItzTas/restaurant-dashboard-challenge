import { CardMesaProps } from "@/components/cards/CardMesa";
import { getAllCheckpads } from "@/lib/api/checkpadResponse";
import { CheckpadValue } from "@/types/apiResponse.types";
import { getOrdersheetsRecordByIds } from "./ordersheet";

async function CheckpadToMesaProps(
    item: CheckpadValue,
): Promise<CardMesaProps> {
    const { id, identifier } = item;

    if (!item.hasOrder || item.orderSheetIds.length === 0) {
        return {
            identifier,
            data: undefined,
        };
    }

    const ordersheets = await getOrdersheetsRecordByIds(item.orderSheetIds);
    console.log(item.orderSheetIds);
    console.log(ordersheets);

    const totalPrice = Object.values(ordersheets).reduce((acc, ordersheet) => {
        return acc + ordersheet.subtotal;
    }, 0);

    const cardProps: CardMesaProps = {
        identifier: identifier,
        data: {
            totalPrice,
            contact: {
                type: "phone",
            },
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
