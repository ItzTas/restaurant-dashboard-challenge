import AvatarIcon from "../icons/AvatarIcon";
import ReceiptIcon from "../icons/ReceiptIcon";
import TableIcon from "../icons/TableIcon";
import {
    descriptionIconProps,
    headerIconProps,
} from "../../constants/iconPresets";
import CardContainer from "./CardContainer";
import CardHeader from "./CardHeader";
import CardDescription from "./CardDescription";
import CardSummaryFooter from "./CardSummaryFooter";
import CardDescriptionRow from "./CardDescriptionRow";
import { getInitials } from "@/utils/string";
import IdBadgeIcon from "../icons/IdBadgeIcon";
import React from "react";
import CheckpadIcon from "../icons/CheckpadIcon";
import { Model } from "@/types/cards";

export interface CardMesaCustumerData {
    value: string;
    isRealName: boolean;
}

export interface CardMesaPropsData {
    ordersheetsNum: number;
    customer: CardMesaCustumerData;
    model: Model;
    lastOrderCreated: Date;
    waiterFullName: string;
    totalPrice: number;
}

export interface CardMesaProps {
    identifier: string;
    data?: CardMesaPropsData;
}

export default function CardMesa({
    identifier,
    data,
    ...props
}: CardMesaProps & React.ComponentProps<typeof CardContainer>) {
    const {
        customer,
        model,
        lastOrderCreated,
        ordersheetsNum,
        waiterFullName,
        totalPrice,
    } = data ?? {};

    function getCustomerIcon() {
        if (!customer) return null;
        return customer.isRealName ? (
            <AvatarIcon {...descriptionIconProps} />
        ) : (
            <IdBadgeIcon {...descriptionIconProps} />
        );
    }

    const waiter = waiterFullName ? getInitials(waiterFullName) : "--";

    return (
        <CardContainer {...props}>
            <div>
                <CardHeader>
                    <TableIcon {...headerIconProps} />
                    {identifier}
                </CardHeader>
                {data && (
                    <CardDescription $mt="4px">
                        <CardDescriptionRow>
                            <ReceiptIcon {...descriptionIconProps} />
                            <span>{ordersheetsNum}</span>
                        </CardDescriptionRow>
                        <CardDescriptionRow>
                            {getCustomerIcon()}
                            <span>{customer!.value}</span>
                        </CardDescriptionRow>
                        <CardDescriptionRow>
                            <CheckpadIcon icon={model!.icon} {...descriptionIconProps} />
                            <span>{model!.value}</span>
                        </CardDescriptionRow>
                    </CardDescription>
                )}
            </div>
            {data && (
                <CardSummaryFooter
                    from={lastOrderCreated!}
                    waiter={waiter}
                    price={totalPrice!}
                />
            )}
        </CardContainer>
    );
}
