import ReceiptIcon from "../icons/ReceiptIcon";
import React, { cloneElement, JSX } from "react";
import CallIcon from "../icons/CallIcon";
import AvatarIcon from "../icons/AvatarIcon";
import TableIcon from "../icons/TableIcon";
import LocationIcon from "../icons/LocationIcon";
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

export interface CardOrdersheetProps {
    identifier: string;
    subtitle?: {
        value: string;
        type: "phone" | "id" | "customer";
    };
    tableText?: string;
    locationText?: string;
    idleTime: number;
    waiterFullName: string;
    totalPrice: number;
}

type SubtitleType = NonNullable<CardOrdersheetProps["subtitle"]>["type"];

export default function CardOrdersheet({
    identifier,
    subtitle,
    tableText,
    locationText,
    idleTime,
    waiterFullName,
    totalPrice,
    ...props
}: CardOrdersheetProps & React.ComponentProps<typeof CardContainer>) {
    function getSubtitleIcon() {
        const icons: Record<SubtitleType, JSX.Element> = {
            phone: <CallIcon />,
            id: <ReceiptIcon />,
            customer: <AvatarIcon />,
        } as const;

        return cloneElement(icons[subtitle!.type], descriptionIconProps);
    }

    const waiter = waiterFullName ? getInitials(waiterFullName) : "--";

    return (
        <CardContainer {...props}>
            <div>
                <CardHeader>
                    <ReceiptIcon {...headerIconProps} />
                    {identifier}
                </CardHeader>

                {(subtitle || tableText || locationText) && (
                    <CardDescription $mt="4px">
                        {subtitle && (
                            <CardDescriptionRow>
                                {getSubtitleIcon()}
                                <span>{subtitle.value}</span>
                            </CardDescriptionRow>
                        )}
                        {tableText && (
                            <CardDescriptionRow>
                                <TableIcon {...descriptionIconProps} />
                                <span>{tableText}</span>
                            </CardDescriptionRow>
                        )}
                        {locationText && (
                            <CardDescriptionRow>
                                <LocationIcon {...descriptionIconProps} />
                                <span>{locationText}</span>
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
