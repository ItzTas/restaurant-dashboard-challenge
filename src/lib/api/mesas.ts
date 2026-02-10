import { CardMesaProps } from "@/components/cards/CardMesa";
import { getAllCheckpads } from "@/lib/api/checkpadResponse";
import { CheckpadValue } from "@/types/apiResponse.types";

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

    const totalValue = "";

    const cardProps: CardMesaProps = {
        identifier: identifier,
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
