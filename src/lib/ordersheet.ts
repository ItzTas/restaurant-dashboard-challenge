import {
    CardOrdersheetContact,
    CardOrdersheetProps,
} from "@/components/cards/CardOrdersheet";
import { getAllOrdersheet } from "./api/ordersheet";
import { OrdersheetValue } from "@/types/api";
import { Model } from "@/types/cards";

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

    let model: Model | undefined;

    if (val.checkpad && val.checkpad.model && val.checkpad.modelIcon) {
        model = {
            value: val.checkpad.model,
            icon: val.checkpad.modelIcon,
        };
    }

    let contact: CardOrdersheetContact | undefined;
    if (val.contact) {
        contact = {
            value: val.contact,
            type: "phone",
        };
    } else if (val.customerName) {
        contact = {
            value: val.customerName,
            type: "customer",
        };
    }

    const tableText =
        val.checkpad?.identifier && `Mesa ${val.checkpad.identifier}`;

    return {
        contact: contact,
        identifier,
        idleTime: val.idleTime,
        totalPrice: val.subtotal,
        waiterFullName: val.author.name,
        model,
        customersNum: val.numberOfCustomers,
        tableText: tableText,
    };
}

export async function getDashboardOrdersheets(): Promise<
    CardOrdersheetProps[]
> {
    const res = await getAllOrdersheet();

    const promises = Object.values(res).map(orderSheetToProps);

    return Promise.all(promises);
}
