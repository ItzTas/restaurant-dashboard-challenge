import ReceiptIcon from "../icons/ReceiptIcon";
import React, { cloneElement, JSX } from "react";
import CallIcon from "../icons/CallIcon";
import AvatarIcon from "../icons/AvatarIcon";
import TableIcon from "../icons/TableIcon";
import LocationIcon from "../icons/LocationIcon";
import CardContainer from "./CardContainer";
import CardHeader from "./CardHeader";
import CardDescription from "./CardDescription";
import { descriptionIconProps } from "../../constants/iconPresets";
import CardSummaryFooter from "./CardSummaryFooter";

export interface OrderCardProps {
    title: string;
    subtitle?: {
        value: string;
        type: "phone" | "id" | "customer";
    };
    tableText?: string;
    locationText?: string;
    createdAt: Date;
    waiter: string;
    totalPrice: number;
}

type SubtitleType = NonNullable<OrderCardProps["subtitle"]>["type"];

export default function CardOrderSheet({
    title,
    subtitle,
    tableText,
    locationText,
    createdAt,
    waiter,
    totalPrice,
    ...props
}: OrderCardProps & React.HTMLAttributes<HTMLDivElement>) {
    function getSubtitleIcon() {
        const icons: Record<SubtitleType, JSX.Element> = {
            phone: <CallIcon />,
            id: <ReceiptIcon />,
            customer: <AvatarIcon />,
        } as const;

        return cloneElement(icons[subtitle!.type], descriptionIconProps);
    }

    return (
        <CardContainer {...props}>
            <div>
                <CardHeader>
                    <ReceiptIcon width={14} height={15} />
                    {title}
                </CardHeader>

                {(subtitle || tableText || locationText) && (
                    <CardDescription $mt="4px">
                        {subtitle && (
                            <div>
                                {getSubtitleIcon()}
                                {subtitle.value}
                            </div>
                        )}
                        {tableText && (
                            <div>
                                <TableIcon {...descriptionIconProps} />
                                {tableText}
                            </div>
                        )}
                        {locationText && (
                            <div>
                                <LocationIcon {...descriptionIconProps} />
                                {locationText}
                            </div>
                        )}
                    </CardDescription>
                )}
            </div>

            <CardSummaryFooter
                createdAt={createdAt}
                waiter={waiter}
                price={totalPrice}
            />
        </CardContainer>
    );
}
