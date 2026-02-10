import ReceiptIcon from "../icons/ReceiptIcon";
import React, { cloneElement, JSX } from "react";
import CallIcon from "../icons/CallIcon";
import AvatarIcon from "../icons/AvatarIcon";
import TableIcon from "../icons/TableIcon";
import CardContainer from "./CardContainer";
import CardHeader from "./CardHeader";
import CardDescription from "./CardDescription";
import {
    descriptionIconProps,
    headerIconProps,
} from "../../constants/iconPresets";
import CardSummaryFooter from "./CardSummaryFooter";
import CardDescriptionRow from "./CardDescriptionRow";
import { getInitials } from "@/utils/string";
import CustomersIcon from "../icons/CustomersIcon";
import { Model } from "@/types/cards";
import CheckpadIcon from "../icons/CheckpadIcon";

export interface CardOrdersheetContact {
    value: string;
    type: "phone" | "customer";
}

export interface CardOrdersheetProps {
    identifier: string;
    contact?: CardOrdersheetContact;
    customersNum?: number;
    tableText?: string;
    model?: Model;
    idleTime: number;
    waiterFullName: string;
    totalPrice: number;
}

type SubtitleType = NonNullable<CardOrdersheetProps["contact"]>["type"];

export default function CardOrdersheet({
    identifier,
    contact,
    customersNum,
    tableText,
    model,
    idleTime,
    waiterFullName,
    totalPrice,
    ...props
}: CardOrdersheetProps & React.ComponentProps<typeof CardContainer>) {
    function getSubtitleIcon() {
        if (!contact?.type) {
            return;
        }
        const icons: Record<SubtitleType, JSX.Element> = {
            phone: <CallIcon />,
            customer: <AvatarIcon />,
        } as const;

        return cloneElement(icons[contact.type], descriptionIconProps);
    }

    const waiter = waiterFullName ? getInitials(waiterFullName) : "--";

    return (
        <CardContainer {...props}>
            <div>
                <CardHeader>
                    <ReceiptIcon {...headerIconProps} />
                    {identifier}
                </CardHeader>

                {(contact || tableText || model) && (
                    <CardDescription $mt="4px">
                        {contact && (
                            <CardDescriptionRow>
                                {getSubtitleIcon()}
                                <span>{contact.value}</span>
                            </CardDescriptionRow>
                        )}
                        {tableText && (
                            <CardDescriptionRow>
                                <TableIcon {...descriptionIconProps} />
                                <span>{tableText}</span>
                            </CardDescriptionRow>
                        )}
                        {model && (
                            <CardDescriptionRow>
                                <CheckpadIcon icon={model.icon} {...descriptionIconProps} />
                                <span>{model.value}</span>
                            </CardDescriptionRow>
                        )}
                        {customersNum && (
                            <CardDescriptionRow>
                                <CustomersIcon {...descriptionIconProps} />
                                {customersNum}
                            </CardDescriptionRow>
                        )}
                    </CardDescription>
                )}
            </div>

            <CardSummaryFooter
                idleTime={idleTime}
                waiter={waiter}
                price={totalPrice}
            />
        </CardContainer>
    );
}
